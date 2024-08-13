import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ROUTES } from '../../../constants/routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    MatProgressBarModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);
  btnIcon = signal('lock_open');

  passwordVisible = false;

  onSubmit(form: NgForm) {
    this.isLoading.set(true);
    this.authService.login(form.value.email, form.value.password).subscribe({
      next: () => {
        this.router.navigate([ROUTES.EMPLOYEES]);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }
}
