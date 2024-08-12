import { Routes } from '@angular/router';
import { ROUTES } from '../constants/routes';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../modules/auth/login/login.component';

export const authRoutes: Routes = [
  {
    path: ROUTES.AUTH,
    component: AuthLayoutComponent,
    children: [
      { path: ROUTES.LOGIN, component: LoginComponent },
      { path: '', redirectTo: ROUTES.LOGIN, pathMatch: 'full' },
    ],
  },
];
