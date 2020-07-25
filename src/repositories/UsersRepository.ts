import { IUser } from '@models/User'
import usersData from './users.json'

export interface IUsersRepository {
  // getAll(): IUser[];
}

export default class UsersRepository implements IUsersRepository {
  // private users: IUser[];

  // constructor () {
  //   this.users = [...usersData]
  // }

  // getAll () {
  //   return this.users
  // }
}
