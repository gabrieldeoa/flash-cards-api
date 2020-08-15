import 'reflect-metadata'
import faker from 'faker'

import CardsService, { ICardsService } from '../../services/CardsService'
import { ICardsRepository } from '../../repositories/CardsRepository'
import { Card } from '../../models/Card'

let sut: ICardsService

const mockCard = () => new Card(faker.lorem.sentence(), [])

describe('CardsService', () => {
  beforeAll(async () => {
    const cardsRepository = <ICardsRepository>(<unknown>{
      getRandom: jest.fn(() => mockCard())
    })

    sut = new CardsService(cardsRepository)
  })

  it('should get a random card', async () => {
    const result = await sut.getRandom()

    expect(result).toBeTruthy()
  })
})
