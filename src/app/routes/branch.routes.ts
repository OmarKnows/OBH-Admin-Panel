import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { BranchListComponent } from '../modules/branches/branch-list/branch-list.component';
import { BranchDetailsComponent } from '../modules/branches/branch-details/branch-details.component';

export const branchRoutes: Routes = [
  {
    path: ROUTES.BRANCHES,
    component: BranchListComponent,
  },
  {
    path: ROUTES.BRANCHES + '/:id',
    component: BranchDetailsComponent,
  },
];
