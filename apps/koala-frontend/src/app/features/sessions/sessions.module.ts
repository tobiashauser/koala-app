import { NgModule } from '@angular/core';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsOverviewPage } from './pages/sessions-overview/sessions-overview.page';
import { ToolbarsService } from './services/toolbars.service';

//primeng modules
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ColorPickerModule } from 'primeng/colorpicker';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { QRCodeModule } from 'angularx-qrcode';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MixedCdkDragDropModule } from 'angular-mixed-cdk-drag-drop';

import { SessionsOverviewTableComponent } from './components/sessions-overview-table/sessions-overview-table.component';
import { SessionMaintainPage } from './pages/session-maintain/session-maintain.page';
import { SessionPage } from './pages/session/session.page';
import { SessionBasicDataComponent } from './components/session-basic-data/session-basic-data.component';
import { SharedModule } from '../../shared/shared.module';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { SessionDatesComponent } from './components/session-dates/session-dates.component';
import { SessionAudioComponent } from './components/session-audio/session-audio.component';
import { AudioWaveComponent } from './components/audio-wave/audio-wave.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { MediaService } from './services/media.service';
import { SessionDataComponent } from './components/session-data/session-data.component';
import { SessionMarkerDataComponent } from './components/session-marker-data/session-marker-data.component';
import { MarkerMaintainComponent } from './components/marker-maintain/marker-maintain.component';
import { MarkerPlacementComponent } from './components/marker-placement/marker-placement.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SessionParticipantsComponent } from './components/session-participants/session-participants.component';
import { SessionParticipantsOverviewComponent } from './components/session-participants-overview/session-participants-overview.component';
import { SessionParticipantsInvitationComponent } from './components/session-participants-invitation/session-participants-invitation.component';
import { MarkerService } from './services/marker.service';
import { AnnotationService } from './services/annotation.service';
import { MarkerToolbarComponent } from './components/marker-toolbar/marker-toolbar.component';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { UserSessionService } from './services/user-session.service';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { SessionQrcodeComponent } from './components/session-qrcode/session-qrcode.component';
import { SessionMarkerLibraryComponent } from './components/session-marker-library/session-marker-library.component';
import { SessionInfoPage } from './pages/session-info/session-info.page';
import { SessionAnalysisPage } from './pages/session-analysis/session-analysis.page';
import { VisibleFilterPipe } from './components/marker-toolbar/marker-visible.pipe';
import { SessionOwnerPipe } from './pipes/session-owner.pipe';
import { VolumeControlComponent } from './components/volume-control/volume-control.component';
import { SessionTimerComponent } from './components/session-timer/session-timer.component';
import { MarkersModule } from '../markers/markers.module';
import { SessionMarkerPreviewComponent } from './components/session-marker-preview/session-marker-preview.component';

@NgModule({
  declarations: [
    SessionsOverviewPage,
    SessionsOverviewTableComponent,
    SessionMaintainPage,
    SessionPage,
    SessionBasicDataComponent,
    SessionDetailsComponent,
    SessionDatesComponent,
    SessionAudioComponent,
    SessionDataComponent,
    SessionMarkerDataComponent,
    MarkerMaintainComponent,
    MarkerPlacementComponent,
    AudioWaveComponent,
    AudioPlayerComponent,
    SessionParticipantsComponent,
    SessionParticipantsOverviewComponent,
    SessionParticipantsInvitationComponent,
    MarkerToolbarComponent,
    DeleteConfirmDialogComponent,
    AnnotationComponent,
    SessionQrcodeComponent,
    SessionMarkerLibraryComponent,
    SessionInfoPage,
    SessionAnalysisPage,
    VisibleFilterPipe,
    SessionOwnerPipe,
    VolumeControlComponent,
    SessionTimerComponent,
    SessionMarkerPreviewComponent,
  ],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    TableModule,
    InputTextareaModule,
    DropdownModule,
    ColorPickerModule,
    SkeletonModule,
    RippleModule,
    FileUploadModule,
    DragDropModule,
    TabViewModule,
    DialogModule,
    MixedCdkDragDropModule,
    AccordionModule,
    OverlayPanelModule,
    QRCodeModule,
    SidebarModule,
    DividerModule,
    ToolbarModule,
    InputNumberModule,
    InputSwitchModule,
    ConfirmDialogModule,
    MarkersModule,
  ],
  providers: [
    MediaService,
    MarkerService,
    ToolbarsService,
    UserSessionService,
    AnnotationService,
  ],
})
export class SessionsModule {}
