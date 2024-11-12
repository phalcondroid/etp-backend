import { Inject, Injectable } from "@nestjs/common";
import { Trafficlight } from "../models/trafficlight.model";
import { QueryTypes } from 'sequelize';

@Injectable()
export class GetTrafficLightService {
  constructor(
    @Inject('TRAFFICLIGHT_REPOSITORY')
    private lightRepository: typeof Trafficlight,
  ) { }

  public async getLights(lat: number, lng: number): Promise<Trafficlight[]> {
    const query = `
      SELECT 
        *
      FROM 
        trafficlight
      WHERE 6371000 * acos(
          cos(radians(:latitude)) * cos(radians(lat)) *
          cos(radians(lng) - radians(:longitude)) +
          sin(radians(:latitude)) * sin(radians(lat))
      ) <= :radius;
    `;
    return await this.lightRepository.sequelize.query(query, {
      replacements: { latitude: lat, longitude: lng, radius: 500 },
      type: QueryTypes.SELECT,
    });
  }
}