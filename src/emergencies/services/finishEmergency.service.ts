import { Inject, Injectable } from "@nestjs/common";
import { Emergency } from "../models/emergency.model";
import { FinishEmergencyResponse } from "../contracts/responses/finishEmergency.response";
import { FinishEmergencyRequest } from "../contracts/request/finishEmergency.request";
import { EmergencyDoNotFoundException } from "../exceptions/emergencyDoNotExist.exception";
import { EmergencyAlreadyFinishedException } from "../exceptions/emergencyAlreadyFinished.exception";

@Injectable()
export class FinishEmergencyService {
  constructor(
    @Inject('EMERGENCY_REPOSITORY')
    private readonly emergencyRepo: typeof Emergency,
  ) { }

  /**
   * 
   * @param request 
   * @returns 
   */
  public async finish(request: FinishEmergencyRequest): Promise<FinishEmergencyResponse> {
    const emergency = await this.emergencyRepo.findOne({
      where: { id: request.emergencyId }
    });
    if (!emergency) { throw new EmergencyDoNotFoundException(); }
    if (emergency.status !== 1) { throw new EmergencyAlreadyFinishedException(); }
    emergency.finishDatetime = request.finishDatetime;
    emergency.status = 2;
    const result = await emergency.save();
    return { finished: result };
  }
}