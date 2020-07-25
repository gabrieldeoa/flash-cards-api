import { injectable, inject } from 'tsyringe'
import { IUsersRepository } from '@repositories/UsersRepository'
import { IUser } from '@models/User'

export interface IUsersService {
  // getAll(): IUser[];
}

@injectable()
export default class UsersService implements IUsersService {
  // private usersRepository: IUsersRepository;

  // constructor (@inject('IUsersRepository') usersRepository: IUsersRepository) {
  constructor (@inject('IUsersRepository') private usersRepository: IUsersRepository) {
    // this.usersRepository = usersRepository
  }
}
