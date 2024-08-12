import { IAuth } from './models/auth.model';

export interface IResponse<T> {
  data: T[];
  total: number;
  limit: number;
  pages: number;
  page: number;
  localizedMessage: localizedText;
  statusCode: number;
}

export interface IAuthResponse {
  data: IAuth;
  localizedMessage: localizedText;
  statusCode: number;
}

export interface localizedText {
  en: string;
  ar: string;
}
