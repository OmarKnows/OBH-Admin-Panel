import { IAuth } from './models/auth.model';

export interface IResponse<T> {
  data: T[];
  total: number;
  limit: number;
  pages: number;
  page: number;
  localizedMessage: ILocalizedText;
  statusCode: number;
}

export interface IAuthResponse {
  payload: {
    data: IAuth;
  };
  localizedMessage: ILocalizedText;
  statusCode: number;
}

export interface ILocalizedText {
  en: string;
  ar: string;
}
