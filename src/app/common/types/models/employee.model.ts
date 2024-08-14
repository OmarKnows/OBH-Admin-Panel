import { IBranch } from './branch.model';
import { IRole } from './role.model';

export enum EEmployeeStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  branches: IBranch[];
  status: EEmployeeStatus;
  defaultRole: IRole;
}
