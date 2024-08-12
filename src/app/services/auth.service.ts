import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EAPI } from '../constants/eapi';
import { catchError, throwError } from 'rxjs';
import { IAuthResponse } from '../common/types/shared.types';
import { IAuth } from '../common/types/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.httpClient
      .post<IAuthResponse<IAuth>>(EAPI.AUTH + 'login', {
        email,
        password,
      })
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(
            () => new Error('An error occurred while logging in')
          );
        })
      );
  }
}
