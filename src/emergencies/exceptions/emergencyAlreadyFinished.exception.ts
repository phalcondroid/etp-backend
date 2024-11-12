import { HttpException, HttpExceptionOptions, HttpStatus } from "@nestjs/common";

export class EmergencyAlreadyFinishedException extends HttpException {
  constructor() {
    super('Emergency already finished', HttpStatus.FORBIDDEN);
  }
}