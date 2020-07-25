import 'reflect-metadata'

import { container } from 'tsyringe'
import UserService from '@services/UsersService'
import UserRepository from '@repositories/UsersRepository'

container.register('IUsersService', {
  useClass: UserService
})

container.register('IUsersRepository', {
  useClass: UserRepository
})

// const userService = container.resolve('IUsersService');
