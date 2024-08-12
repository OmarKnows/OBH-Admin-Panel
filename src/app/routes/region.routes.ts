import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { RegionListComponent } from '../modules/regions/region-list/region-list.component';
import { RegionDetailsComponent } from '../modules/regions/region-details/region-details.component';

export const regionRoutes: Routes = [
  {
    path: ROUTES.REGIONS,
    component: RegionListComponent,
  },
  {
    path: ROUTES.REGIONS + '/:id',
    component: RegionDetailsComponent,
  },
];
