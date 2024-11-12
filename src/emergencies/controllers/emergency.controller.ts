import { Body, Controller, Patch, Post, UseGuards } from "@nestjs/common";
import { SaveEmergencyResponse } from "../contracts/responses/saveEmergency.response";
import { SaveEmergencyRequest } from "../contracts/request/saveEmergency.request";
import { SaveEmergencyService } from "../services/saveEmergency.service";
import { FinishEmergencyRequest } from "../contracts/request/finishEmergency.request";
import { FinishEmergencyResponse } from "../contracts/responses/finishEmergency.response";
import { FinishEmergencyService } from "../services/finishEmergency.service";
import { AuthGuard } from "src/shared/guards/auth.guard";

@Controller('emergency')
export class EmergencyController {

  constructor(
    private readonly saveEmergencyService: SaveEmergencyService,
    private readonly finishEmergencyService: FinishEmergencyService
  ) { }

  @UseGuards(AuthGuard)
  @Post()
  async save(@Body() body: SaveEmergencyRequest): Promise<SaveEmergencyResponse> {
    return this.saveEmergencyService.save(body);
  }

  @UseGuards(AuthGuard)
  @Patch()
  async finishEmergency(@Body() body: FinishEmergencyRequest): Promise<FinishEmergencyResponse> {
    return this.finishEmergencyService.finish(body);
  }
}
