import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {
  loginBannerPath = 'assets/images/login-banner.webp';
}
