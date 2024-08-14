import { createReducer, on } from '@ngrx/store';
import { hideLoader, showLoader } from './loader.actions';

const initialState: boolean = false;

export const loaderReducer = createReducer(
  initialState,
  on(showLoader, () => true),
  on(hideLoader, () => false)
);
