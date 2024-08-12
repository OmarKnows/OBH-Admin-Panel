import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ROUTES } from '../../../constants/routes';
import { Router } from '@angular/router';
import { INavItem } from '../../types/interfaces/nav-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  private router = inject(Router);

  logoSrc = 'assets/logos/logo-white.svg';
  navItems: INavItem[] = [
    { icon: 'work', label: 'Employees', route: ROUTES.EMPLOYEES },
    { icon: 'person', label: 'Users', route: ROUTES.USERS },
    { icon: 'shield', label: 'Roles', route: ROUTES.ROLES },
    { icon: 'room_service', label: 'Services', route: ROUTES.SERVICES },
    { icon: 'location_pin', label: 'Regions', route: ROUTES.REGIONS },
    { icon: 'domain', label: 'Branches', route: ROUTES.BRANCHES },
    { icon: 'account_balance', label: 'Courts', route: ROUTES.COURTS },
    { icon: 'cases', label: 'Case Types', route: ROUTES.CASE_TYPES },
  ];
  logoutNav: INavItem = {
    icon: 'logout',
    label: 'Logout',
    route: `${ROUTES.AUTH}/${ROUTES.LOGIN}`,
  };
  options: IsActiveMatchOptions = {
    queryParams: 'ignored',
    matrixParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  isActive(route: string): boolean {
    return this.router.isActive(
      this.router.createUrlTree([route]),
      this.options
    );
  }
}
