import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { CaseTypeListComponent } from '../modules/case-types/case-type-list/case-type-list.component';
import { CaseTypeDetailsComponent } from '../modules/case-types/case-type-details/case-type-details.component';

export const caseTypeRoutes: Routes = [
  {
    path: ROUTES.CASE_TYPES,
    component: CaseTypeListComponent,
  },
  {
    path: ROUTES.CASE_TYPES + '/:id',
    component: CaseTypeDetailsComponent,
  },
];
