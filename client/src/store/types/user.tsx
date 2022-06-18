export interface IUserState {
  users?: any
  loading?: boolean
  error?: null | string
  toggleAddUser?: boolean
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  ADD_USER = 'ADD_USER',
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}
interface IFetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}
interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}
interface IAddUser {
  type: UserActionTypes.ADD_USER
  addUser: {
    id?: number | null
    username: string
    email: string
  }
}
export type UserAction =
  IFetchUsersAction |
  IFetchUsersSuccessAction |
  IFetchUsersErrorAction |
  IAddUser
