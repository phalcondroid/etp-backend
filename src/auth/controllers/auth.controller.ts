import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginRequest } from '../contracts/request/login.request';
import { LoginService } from '../services/login.service';
import { LoginResponse } from '../contracts/responses/login.response';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: LoginService) { }

  @Post()
  async auth(@Body() body: LoginRequest): Promise<LoginResponse> {
    const user = await this.authService.doLogin(body);
    return { token: user.token };
  }
}
