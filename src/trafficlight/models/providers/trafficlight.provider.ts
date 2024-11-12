import { Trafficlight } from "../trafficlight.model";

export const trafficlightProvider = [
  {
    provide: 'TRAFFICLIGHT_REPOSITORY',
    useValue: Trafficlight,
  },
];