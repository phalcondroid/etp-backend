import { User } from "../user.model";

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];