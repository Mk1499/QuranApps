import { ActionReducerMap } from '@ngrx/store';
import * as fromStudent from '../Screens/Student/Store/student.reducer';


export interface AppState {
  studentData : fromStudent.State;
}

export const appReducer:ActionReducerMap<AppState> = {
  studentData : fromStudent.studentReducer
}
