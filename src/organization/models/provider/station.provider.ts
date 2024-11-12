import { Station } from "../station.model";

export const stationProvider = [
  {
    provide: 'STATION_REPOSITORY',
    useValue: Station,
  },
];