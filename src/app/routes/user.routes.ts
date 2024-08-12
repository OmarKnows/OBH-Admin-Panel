import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { UserListComponent } from '../modules/users/user-list/user-list.component';
import { UserDetailsComponent } from '../modules/users/user-details/user-details.component';

export const userRoutes: Routes = [
  {
    path: ROUTES.USERS,
    component: UserListComponent,
  },
  {
    path: ROUTES.USERS + '/:id',
    component: UserDetailsComponent,
  },
];
