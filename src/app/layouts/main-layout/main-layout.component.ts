import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from '../../common/components/side-bar/side-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SideBarComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
