import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { PageContainerComponent } from '../../common/components/page-container/page-container.component';
import { SideBarComponent } from '../../common/components/side-bar/side-bar.component';

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
export class MainLayoutComponent {
  private router = inject(Router);

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
