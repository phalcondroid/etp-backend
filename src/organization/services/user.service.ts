import { Inject, Injectable } from "@nestjs/common";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) { }

  /**
   * 
   * @param username 
   * @returns 
   */
  public getUserByUsr(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }
}