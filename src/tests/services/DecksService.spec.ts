import 'reflect-metadata'
import faker from 'faker'

import DecksService, { IDecksService } from '../../services/DecksService'
import { IDecksRepository } from '../../repositories/DecksRepository'
import { Card } from '../../models/Card'
import { Deck } from '../../models/Deck'

let sut: IDecksService

const anwsers = [
  { text: faker.lorem.sentence(), isCorrect: true },
  { text: faker.lorem.sentence(), isCorrect: false },
  { text: faker.lorem.sentence(), isCorrect: false },
  { text: faker.lorem.sentence(), isCorrect: false }
]
const question = faker.lorem.sentence()

const mockCard = () => new Card(question, anwsers)

const cards = [mockCard(), mockCard(), mockCard(), mockCard()]

const mockDeck = () => new Deck(faker.lorem.word(), cards, null)

describe('DecksService', () => {
  beforeAll(async () => {
    const decksRespository = <IDecksRepository>(<unknown>{
      getRandom: jest.fn(() => mockDeck()),
      getRandomCard: jest.fn((id) => mockCard())
    })

    sut = new DecksService(decksRespository)
  })

  it('should get a random deck', async () => {
    const result = await sut.getRandom()

    expect(result).toBeTruthy()
  })

  it('should get a random card of deck', async () => {
    const result = await sut.getRandomCard('teste')

    expect(result).toBeTruthy()
  })
})
