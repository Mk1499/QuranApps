import { UserDeviceTokens } from './../Models/token.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromStudent from '../Screens/Student/Store/student.reducer';
import * as fromNotification from '../shared/Store/Notification/notification.reducer';


export interface AppState {
  studentData: fromStudent.State;
  notificationTokens: UserDeviceTokens
}

export const appReducer: ActionReducerMap<AppState> = {
  studentData: fromStudent.studentReducer,
  notificationTokens: fromNotification.tokenReducer
}
