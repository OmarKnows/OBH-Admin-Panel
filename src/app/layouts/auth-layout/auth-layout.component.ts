import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { ELocalStorage } from '../../constants/local-storage';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  private router = inject(Router);
  loginBannerPath = 'assets/images/login-banner.webp';

  ngOnInit(): void {
    const accessToken = localStorage.getItem(ELocalStorage.ACCESS_TOKEN);
    if (accessToken) this.router.navigate(['/']);
  }
}
