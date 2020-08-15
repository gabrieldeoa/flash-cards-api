import 'reflect-metadata'
import { container } from 'tsyringe'

import CardsService from '../services/CardsService'
import CardsRepository from '../repositories/CardsRepository'

const CardsDIConfig = () => {
  container.register('ICardsService', {
    useClass: CardsService
  })

  container.register('ICardsRepository', {
    useClass: CardsRepository
  })
}

export default CardsDIConfig
