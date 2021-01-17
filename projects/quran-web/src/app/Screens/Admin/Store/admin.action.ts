import { Action } from '@ngrx/store';
import { Admin } from '../../../Models/Admin.model';

export const LOGIN_SUCCESS = "[Admin] LOGIN_SUCCESS";
export const LOGIN_FAIL = "[Admin] LOGIN Fail";
export const LOGOUT = "[Admin] LOGOUT";
export const LOGIN_START = "[Admin] Login Start";
export const AUTO_LOGIN = "[Admin] Auto Login";

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: Admin) { }
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) { }
}
