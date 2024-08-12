import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { RoleListComponent } from '../modules/roles/role-list/role-list.component';
import { RoleDetailsComponent } from '../modules/roles/role-details/role-details.component';

export const roleRoutes: Routes = [
  {
    path: ROUTES.ROLES,
    component: RoleListComponent,
  },
  {
    path: ROUTES.ROLES + '/:id',
    component: RoleDetailsComponent,
  },
];
