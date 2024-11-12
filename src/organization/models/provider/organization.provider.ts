import { Organization } from "../organization.model";

export const organizationProvider = [
  {
    provide: 'ORGANIZATION_REPOSITORY',
    useValue: Organization,
  },
];