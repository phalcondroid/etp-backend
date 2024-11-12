import { Vehicle } from "../vehicle.model";

export const vehicleProvider = [
  {
    provide: 'VEHICLE_REPOSITORY',
    useValue: Vehicle,
  },
];