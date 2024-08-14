import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { ELocalStorage } from '../../constants/local-storage';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatProgressBarModule, AsyncPipe],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  private router = inject(Router);
  isLoading$: Observable<boolean>;
  loginBannerPath = 'assets/images/login-banner.webp';

  constructor(private store: Store<{ isLoading: boolean }>) {
    this.isLoading$ = store.select('isLoading');
  }

  ngOnInit(): void {
    const accessToken = localStorage.getItem(ELocalStorage.ACCESS_TOKEN);
    if (accessToken) this.router.navigate(['/']);
  }
}
