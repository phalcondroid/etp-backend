import { Emergency } from "../emergency.model";

export const emergencyProvider = [
  {
    provide: 'EMERGENCY_REPOSITORY',
    useValue: Emergency,
  },
];