import { Inject, Injectable } from "@nestjs/common";
import { Emergency } from "../models/emergency.model";
import { SaveEmergencyRequest } from "../contracts/request/saveEmergency.request";
import { SaveEmergencyResponse } from "../contracts/responses/saveEmergency.response";

@Injectable()
export class SaveEmergencyService {
  constructor(
    @Inject('EMERGENCY_REPOSITORY')
    private readonly emergencyRepo: typeof Emergency,
  ) { }

  /**
   * 
   * @param request 
   * @returns 
   */
  public async save(request: SaveEmergencyRequest): Promise<SaveEmergencyResponse> {
    return { created: await this.emergencyRepo.create({ ...request, status: 1 }) };
  }
}