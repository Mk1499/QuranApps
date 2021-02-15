import { Student } from '../../../Models/Student.model';
import { Teacher } from '../../../Models/teacher';
import * as TeacherAction from './teacher.action';

export interface State {
  teacher: Teacher
}

const intialState: State = {
  teacher: null
}

export function teacherReducer(state: State = intialState, action: TeacherAction.TeacherActions) {

  switch (action.type) {
    case TeacherAction.LOGIN_SUCCESS:
      const teacher: Teacher = {
        name: action.payload.name,
        arName: action.payload.arName,
        email: action.payload.email,
        students: action.payload.students,
        avatar: action.payload.avatar,
        samples: action.payload.samples,
        price: action.payload.price
      }

      return {
        ...state,
        teacher,
      }


    case TeacherAction.LOGOUT:
      return {
        ...state,
        teacher: null
      }
    default:
      return state
  }
}
