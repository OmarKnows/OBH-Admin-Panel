import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { EmployeeListComponent } from '../modules/employees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../modules/employees/employee-details/employee-details.component';

export const employeeRoutes: Routes = [
  {
    path: ROUTES.EMPLOYEES,
    component: EmployeeListComponent,
  },
  {
    path: ROUTES.EMPLOYEES + '/:id',
    component: EmployeeDetailsComponent,
  },
];
