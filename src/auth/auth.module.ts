import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from 'src/db/db.module';
import { jwtConstants } from './config/secrets';
import { AuthController } from './controllers/auth.controller';
import { LoginService } from './services/login.service';
import { OrganizationModule } from 'src/organization/organization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DbModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
    OrganizationModule
  ],
  controllers: [AuthController],
  providers: [
    LoginService,
  ],
})
export class AuthModule { }
