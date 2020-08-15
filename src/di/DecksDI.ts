import 'reflect-metadata'

import { container } from 'tsyringe'
import DecksService from '@services/DecksService'
import DecksRepository from '@repositories/DecksRepository'

container.register('IDecksService', {
  useClass: DecksService
})

container.register('IDecksRepository', {
  useClass: DecksRepository
})
