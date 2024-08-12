import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EAPI } from '../constants/eapi';
import { catchError, tap, throwError } from 'rxjs';
import { IAuthResponse } from '../common/types/shared.types';
import { IAuth } from '../common/types/models/auth.model';
import { ELocalStorage } from '../constants/local-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.httpClient
      .post<IAuthResponse>(EAPI.AUTH + 'login', {
        email,
        password,
      })
      .pipe(
        tap((response: IAuthResponse) => {
          localStorage.setItem(
            ELocalStorage.ACCESS_TOKEN,
            response.data.accessToken
          );
          localStorage.setItem(
            ELocalStorage.REFRESH_TOKEN,
            response.data.refreshToken
          );
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(
            () => new Error('An error occurred while logging in')
          );
        })
      );
  }
}
