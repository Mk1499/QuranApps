import { UserDeviceTokens } from '../../../Models/token.model';
import * as NoteActions from './notification.action';


const intialState: UserDeviceTokens = {
  webToken: null,
  mobileToken: null
}

export function tokenReducer(state: UserDeviceTokens = intialState, action: NoteActions.NotificationActions) {

  switch (action.type) {
    case NoteActions.ADD_MOBILE_TOKEN:
      return {
        ...state,
        mobileToken: action.payload
      }


    case NoteActions.ADD_WEB_TOKEN:
      return {
        ...state,
        webToken: action.payload
      }
    default:
      return state
  }
}
