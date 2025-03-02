import { Injectable } from '@angular/core';
import { MutationResult } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  CreateNewSessionGQL,
  DeleteSessionGQL,
  GetSessionsGQL,
  GetOneSessionGQL,
  UpdateSessionGQL,
  UpdateSessionInput,
  CreateSessionInput,
  OnSessionUpdatedGQL,
  CreateNewSessionMutation,
  GetOneSessionBySessionCodeGQL,
  SetPlayModeGQL,
  SetPlayPositionGQL,
  SetPlayModeInput,
  ToolbarMarker,
  SessionExportGQL,
} from '../../../graphql/generated/graphql';
import { Session } from '../types/session.entity';
import { AccessTokenService } from '../../auth/services/access-token.service';
import { ToolbarsService } from './toolbars.service';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private focusSession?: Session;

  private focusSessionSubject = new Subject<Session>();
  public focusSessionChanged$ = this.focusSessionSubject.asObservable();

  constructor(
    private readonly getSessionGQL: GetSessionsGQL,
    private readonly getOneSessionGQL: GetOneSessionGQL,
    private readonly createSessionGQL: CreateNewSessionGQL,
    private readonly updateSessionGQL: UpdateSessionGQL,
    private readonly deleteSessionGQL: DeleteSessionGQL,
    private readonly onSessionUpdatedGQL: OnSessionUpdatedGQL,
    private readonly getOneSessionBySessionCodeGQL: GetOneSessionBySessionCodeGQL,
    private readonly setPlayModeGQL: SetPlayModeGQL,
    private readonly setPlayPositionGQL: SetPlayPositionGQL,
    private readonly accessTokenService: AccessTokenService,
    private readonly toolbarService: ToolbarsService,
    private readonly sessionExportGQL: SessionExportGQL
  ) {}

  getAll(): Observable<Session[]> {
    return this.getSessionGQL.fetch({}, { fetchPolicy: 'no-cache' }).pipe(map((data) => data.data.sessions));
  }

  getSessionIdBySessionCode(code: string): Observable<number> {
    return this.getOneSessionBySessionCodeGQL
      .fetch({ code }, { fetchPolicy: 'no-cache' })
      .pipe(map((response) => parseInt(response.data.sessionByCode.id)));
  }

  getOne(id: number): Observable<Session> {
    return this.getOneSessionGQL
      .fetch(
        {
          sessionId: id,
        },
        { fetchPolicy: 'no-cache' }
      )
      .pipe(map((data) => data.data.session));
  }

  create(session: CreateSessionInput) {
    return this.createSessionGQL.mutate({ session });
  }

  update(id: number, session: UpdateSessionInput) {
    return this.updateSessionGQL.mutate({
      id,
      session,
    });
  }

  delete(id: number) {
    return this.deleteSessionGQL.mutate({ id });
  }

  subscribeUpdated(id: number) {
    return this.onSessionUpdatedGQL
      .subscribe({
        sessionId: id.toString(),
      })
      .pipe(
        map((response) => {
          if (response.data) {
            const session: Session = response.data.sessionUpdated;
            if (session && this.focusSession && this.focusSession.id === session.id && this.focusSession.media) {
              //take over owner and isAudio information
              session.media = this.focusSession.media;
            }

            //keep isSessionOwner information in this case,
            //because the push comes from the session owner and the flag will be always true otherwise
            session.isSessionOwner = this.focusSession?.isSessionOwner;

            return session;
          } else {
            throw new Error('Session Response Empty After Session Update');
          }
        })
      )
      .subscribe({
        next: (session?: Session) => {
          this.focusSession = session;
          if (this.focusSession) {
            this.focusSessionSubject.next(this.focusSession);
          }
        },
      });
  }

  copySession(sessionId: number): Promise<Session | null> {
    let sourceMarkers: ToolbarMarker[] | null | undefined;
    return new Promise<Session | null>((resolve, reject) => {
      this.getOne(sessionId).subscribe({
        next: (session: Session) => {
          if (session.toolbars) {
            sourceMarkers = session.toolbars[0].markers;
          }

          this.createSessionGQL
            .mutate({
              session: {
                name: session.name + ' Copy',
                description: session.description,
                displaySampleSolution: session.displaySampleSolution,
                editable: session.editable,
                enableLiveAnalysis: session.enableLiveAnalysis,
                enablePlayer: session.enablePlayer,
                end: session.end,
                start: session.start,
              },
            })
            .subscribe({
              next: (newSessionResult: MutationResult<CreateNewSessionMutation>) => {
                const newToolbar = newSessionResult.data?.createSession.toolbars[0];

                if (newToolbar && sourceMarkers) {
                  this.toolbarService
                    .update(parseInt(newToolbar.id), {
                      markers: sourceMarkers.map((marker) => marker.markerId),
                    })
                    .subscribe(() => {
                      resolve(newSessionResult.data?.createSession || null);
                    });
                } else {
                  resolve(newSessionResult.data?.createSession || null);
                }
              },
              error: () => {
                reject();
              },
            });
        },
      });
    });
  }

  setPlayMode(sessionId: number, playModeInput: SetPlayModeInput) {
    return this.setPlayModeGQL.mutate({ sessionId, setPlayModeInput: playModeInput }).pipe(
      map((response) => {
        const session = response.data?.setPlayMode;
        if (session) {
          return session;
        } else {
          throw new Error('Session Response Empty After SetPlayMode');
        }
      })
    );
  }

  setPlayPosition(sessionId: number, playPosition: number) {
    return this.setPlayPositionGQL.mutate({ sessionId, setPlayPositionInput: { playPosition } }).pipe(
      map((response) => {
        const session = response.data?.setPlayPosition;
        if (session) {
          return session;
        } else {
          throw new Error('Session Response Empty After SetPlayPosition');
        }
      })
    );
  }

  setFocusSession(sessionId: number) {
    return this.getOne(sessionId).pipe(
      tap((session: Session) => {
        this.focusSession = session;
        this.focusSessionSubject.next(this.focusSession);
      })
    );
  }

  getFocusSession(): Session | undefined {
    return this.focusSession;
  }

  createSessionJSON(sessionId: number): Observable<Session> {
    return this.sessionExportGQL
      .fetch({ sessionId }, { fetchPolicy: 'no-cache' })
      .pipe(map((data) => data.data.session));
  }
}
