import { Action } from '@ngrx/store';


export const ADD_WEB_TOKEN = "[Notification] ADD_WEB_TOKEN";
export const ADD_MOBILE_TOKEN = "[Notification] ADD_MOBILE_TOKEN";

export class AddWebToken implements Action {
  readonly type = ADD_WEB_TOKEN;
  constructor(
    public payload: string
  ) {
  }
}

export class AddMobileToken implements Action {
  readonly type = ADD_MOBILE_TOKEN;
  constructor(
    public payload: string
  ) {
  }
}


export type NotificationActions = AddWebToken | AddMobileToken
