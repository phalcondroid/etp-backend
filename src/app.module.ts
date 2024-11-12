import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { EmergenciesModule } from './emergencies/emergencies.module';
import { SharedModule } from './shared/shared.module';
import { DbModule } from './db/db.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationModule } from './organization/organization.module';
import { TrafficlightModule } from './trafficlight/trafficlight.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    VehiclesModule,
    EmergenciesModule,
    SharedModule,
    DbModule,
    WebModule,
    AuthModule,
    OrganizationModule,
    TrafficlightModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
