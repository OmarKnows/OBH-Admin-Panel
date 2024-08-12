import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { ServiceListComponent } from '../modules/services/service-list/service-list.component';
import { ServiceDetailsComponent } from '../modules/services/service-details/service-details.component';

export const serviceRoutes: Routes = [
  {
    path: ROUTES.SERVICES,
    component: ServiceListComponent,
  },
  {
    path: ROUTES.SERVICES + '/:id',
    component: ServiceDetailsComponent,
  },
];
