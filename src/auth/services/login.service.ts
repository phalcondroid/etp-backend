import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserNotFoundException } from '../exceptions/userNotFound.exception';
import { OrganizationManager } from 'src/organization/organization.manager';
import { LoginRequest } from '../contracts/request/login.request';
import { LoginResponse } from '../contracts/responses/login.response';
import { jwtConstants } from '../config/secrets';

@Injectable()
export class LoginService {

  constructor(
    private readonly organization: OrganizationManager,
    private readonly jwtService: JwtService) { }

  /**
   * 
   * @param params 
   * @returns 
   */
  async doLogin(params: LoginRequest): Promise<LoginResponse> {
    const user = await this.organization.getUserByUsr(params.username);
    if (!user) { throw new UserNotFoundException(); }
    if (!await bcrypt.compare(params.pass, user.password)) { throw new UnauthorizedException(); }
    return { token: await this.jwtService.signAsync({ sub: user.id, username: user.username }) };
  }
}
