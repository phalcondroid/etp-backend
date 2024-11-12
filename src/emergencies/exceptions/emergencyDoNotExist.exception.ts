import { HttpException, HttpExceptionOptions, HttpStatus } from "@nestjs/common";

export class EmergencyDoNotFoundException extends HttpException {
  constructor() {
    super('Emergency not found', HttpStatus.FORBIDDEN);
  }
}