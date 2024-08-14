import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ROUTES } from '../../../constants/routes';
import { AuthService } from '../../../services/auth.service';
import { hideLoader, showLoader } from '../../../store/loader/loader.actions';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  isLoading$: Observable<boolean>;

  constructor(private store: Store<{ isLoading: boolean }>) {
    this.isLoading$ = store.select('isLoading');
  }

  passwordVisible = false;

  onSubmit(form: NgForm) {
    this.store.dispatch(showLoader());
    this.authService.login(form.value.email, form.value.password).subscribe({
      next: () => {
        this.router.navigate([ROUTES.EMPLOYEES]);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
      complete: () => {
        this.store.dispatch(hideLoader());
      },
    });
  }
}
