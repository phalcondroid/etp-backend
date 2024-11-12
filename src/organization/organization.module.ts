import { Module } from '@nestjs/common';
import { organizationProvider } from './models/provider/organization.provider';
import { userProvider } from './models/provider/user.provider';
import { DbModule } from 'src/db/db.module';
import { stationProvider } from './models/provider/station.provider';
import { OrganizationManager } from './organization.manager';
import { UserService } from './services/user.service';
import { vehicleProvider } from './models/provider/vehicle.provider';

@Module({
  imports: [
    DbModule
  ],
  controllers: [

  ],
  providers: [
    UserService,
    OrganizationManager,
    ...organizationProvider,
    ...userProvider,
    ...stationProvider,
    ...vehicleProvider
  ],
  exports: [
    OrganizationManager
  ]
})
export class OrganizationModule { }
