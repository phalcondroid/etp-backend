import { HttpException, HttpExceptionOptions, HttpStatus } from "@nestjs/common";

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.FORBIDDEN);
  }
}