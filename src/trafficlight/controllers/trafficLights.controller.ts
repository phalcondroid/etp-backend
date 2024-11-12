import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { GetTrafficLightService } from '../services/getTrafficlight.service';
import { Trafficlight } from '../models/trafficlight.model';

@Controller('trafficlight')
export class TrafficLightController {

  constructor(private readonly trafficLight: GetTrafficLightService) { }

  @UseGuards(AuthGuard)
  @Get()
  public async getTrafficLights(@Body() body: { lat: number, lng: number }): Promise<Trafficlight[]> {
    return await this.trafficLight.getLights(body.lat, body.lng);
  }
}
