import { Student } from '../../../Models/Student.model';
import * as StuedntAction from './student.action';

export interface State {
  student: Student
}

const intialState: State = {
  student: null
}

export function studentReducer(state: State = intialState, action: StuedntAction.StudentActions) {

  switch (action.type) {
    case StuedntAction.LOGIN_SUCCESS:
      const student: Student = new Student(
        action.payload.name,
        action.payload.arName,
        action.payload.email,
        action.payload.teachers,
        action.payload._id,
        action.payload.role,
        action.payload.avatar
      )
      return {
        ...state,
        student,
      }


    case StuedntAction.LOGOUT:
      return {
        ...state,
        student: null
      }
    default:
      return state
  }
}
