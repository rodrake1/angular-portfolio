import { AuthActons, SIGNUP, SIGNIN, LOGOUT, SET_TOKEN } from "./auth.actions";

export interface AuthState {
  token: string,
  authenticated: boolean
}

const initialState: AuthState = {
  token: null,
  authenticated: false
}

export function AuthReducer(state = initialState, action: AuthActons) {
  switch (action.type) {
    case SIGNUP:
    case SIGNIN:
      return {
        ...state,
        authenticated: true
      }
    case LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}