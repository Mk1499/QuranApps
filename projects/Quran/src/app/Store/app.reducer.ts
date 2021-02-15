import { UserDeviceTokens } from '../Models/token.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromStudent from '../Screens/Student/Store/student.reducer';
import * as fromNotification from '../shared/Store/Notification/notification.reducer';
import * as fromTeacher from '../Screens/Teacher/Store/teacher.reducer';

export interface AppState {
  studentData: fromStudent.State;
  notificationTokens: UserDeviceTokens,
  teacherData: fromTeacher.State
}

export const appReducer: ActionReducerMap<AppState> = {
  studentData: fromStudent.studentReducer,
  notificationTokens: fromNotification.tokenReducer,
  teacherData: fromTeacher.teacherReducer
}
