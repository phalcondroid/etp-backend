import { Module } from '@nestjs/common';
import { trafficlightProvider } from './models/providers/trafficlight.provider';
import { TrafficLightController } from './controllers/trafficLights.controller';
import { GetTrafficLightService } from './services/getTrafficlight.service';

@Module({
  providers: [
    GetTrafficLightService,
    ...trafficlightProvider
  ],
  controllers: [TrafficLightController]
})
export class TrafficlightModule { }
