import { Injectable } from "@nestjs/common";
import { UserService } from "./services/user.service";
import { User } from "./models/user.model";

@Injectable()
export class OrganizationManager {
  constructor(private readonly userService: UserService) { }

  public getUserByUsr(username: string): Promise<User> {
    return this.userService.getUserByUsr(username);
  }
}