import { inject, injectable } from 'tsyringe'
import { User } from '@models/User'
import { IUsersService } from '@services/UsersService'

@injectable()
export default class UsersController {
  constructor (@inject('IUsersService') private usersService: IUsersService) {}
}
