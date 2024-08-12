import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth.routes';
import { branchRoutes } from './routes/branch.routes';
import { caseTypeRoutes } from './routes/case-types.routes';
import { courtRoutes } from './routes/court.routes';
import { employeeRoutes } from './routes/employee.routes';
import { regionRoutes } from './routes/region.routes';
import { roleRoutes } from './routes/role.routes';
import { serviceRoutes } from './routes/serivce.routes';
import { userRoutes } from './routes/user.routes';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

export const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      ...employeeRoutes,
      ...userRoutes,
      ...roleRoutes,
      ...serviceRoutes,
      ...regionRoutes,
      ...branchRoutes,
      ...courtRoutes,
      ...caseTypeRoutes,
    ],
  },
  { path: '**', component: NotFoundComponent },
];
