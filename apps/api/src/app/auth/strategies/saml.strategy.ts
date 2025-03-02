import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, Profile, SamlOptions } from '@node-saml/passport-saml';
import { UsersService } from '../../users/users.service';
import { Config } from '../../config/config';
import * as fs from 'fs';

@Injectable()
export class SamlStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService, private readonly config: Config) {
    super({
      issuer: config.saml.issuer,
      callbackUrl: config.saml.callbackUrl,
      cert: config.saml.cert,
      privateKey: config.saml.privateKeyPath ? fs.readFileSync(config.saml.privateKeyPath, 'utf-8') : undefined,
      decryptionPvk: config.saml.decryptionPvkPath
        ? fs.readFileSync(config.saml.decryptionPvkPath, 'utf-8')
        : undefined,
      entryPoint: config.saml.entryPoint,
      audience: config.saml.audience,
      wantAuthnResponseSigned: config.saml.wantAuthnResponseSigned,
      signatureAlgorithm: config.saml.signatureAlgorithm,
      identifierFormat: config.saml.identifierFormat,
      acceptedClockSkewMs: config.saml.acceptedClockSkewMs,
    } as SamlOptions);
  }

  async validate(profile: Profile) {
    try {
      console.log(profile);
      return this.usersService.upsertBySamlProfile(profile);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
