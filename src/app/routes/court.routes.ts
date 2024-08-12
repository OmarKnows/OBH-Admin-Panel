import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { CourtListComponent } from '../modules/courts/court-list/court-list.component';
import { CourtDetailsComponent } from '../modules/courts/court-details/court-details.component';

export const courtRoutes: Routes = [
  {
    path: ROUTES.COURTS,
    component: CourtListComponent,
  },
  {
    path: ROUTES.COURTS + '/:id',
    component: CourtDetailsComponent,
  },
];
