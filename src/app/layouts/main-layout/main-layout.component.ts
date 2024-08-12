import { Component, OnInit, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { PageContainerComponent } from '../../common/components/page-container/page-container.component';
import { SideBarComponent } from '../../common/components/side-bar/side-bar.component';
import { ELocalStorage } from '../../constants/local-storage';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    SideBarComponent,
    PageContainerComponent,
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    const accessToken = localStorage.getItem(ELocalStorage.ACCESS_TOKEN);
    if (!accessToken) this.router.navigate([ROUTES.AUTH, ROUTES.LOGIN]);
  }

  kebabToTitleCase(kebab: string): string {
    return kebab
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getRouteTitle(): string {
    return this.kebabToTitleCase(this.router.url.split('/').pop() ?? 'Title');
  }
}
