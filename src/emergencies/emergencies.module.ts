import { Module } from '@nestjs/common';
import { emergencyProvider } from './models/provider/emergency.provider';
import { EmergencyController } from './controllers/emergency.controller';
import { SaveEmergencyService } from './services/saveEmergency.service';
import { FinishEmergencyService } from './services/finishEmergency.service';

@Module({
  controllers: [
    EmergencyController
  ],
  providers: [
    SaveEmergencyService,
    FinishEmergencyService,
    ...emergencyProvider
  ]
})
export class EmergenciesModule { }
