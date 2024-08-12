export interface IResponse<T> {
  data: T[];
  total: number;
  limit: number;
  pages: number;
  page: number;
  localizedMessage: localizedText;
  statusCode: number;
}

export type IAuthResponse<T> = Omit<
  IResponse<T>,
  'total' | 'limit' | 'pages' | 'page'
>;

export interface localizedText {
  en: string;
  ar: string;
}
