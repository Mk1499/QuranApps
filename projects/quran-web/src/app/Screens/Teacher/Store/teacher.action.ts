import { Teacher } from './../../../Models/teacher';
import { Action } from '@ngrx/store';


export const LOGIN_SUCCESS = "[Teacher] LOGIN_SUCCESS";
export const LOGOUT = "[Teacher] LOGOUT";

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(
    public payload: Teacher
  ) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(
  ) {
  }
}


export type TeacherActions = LoginSuccess | Logout
