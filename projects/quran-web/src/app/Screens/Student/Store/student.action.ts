import { Student } from './../../../Models/Student.model';
import { Action } from '@ngrx/store';


export const LOGIN_SUCCESS = "[Student] LOGIN_SUCCESS";
export const LOGOUT = "[Student] LOGOUT";

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(
    public payload: Student
  ) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(
  ) {
  }
}


export type StudentActions = LoginSuccess | Logout
