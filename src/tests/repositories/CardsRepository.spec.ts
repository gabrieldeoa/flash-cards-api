import 'reflect-metadata'
import { Collection } from 'mongodb'
import { container } from 'tsyringe'

import configDI from '../../config/DI'

import { ICard } from '../../models/Card'
import { MongoDB } from '../../config/MongoDB'
import CardsRepository, { ICardsRepository } from '../../repositories/CardsRepository'
import { IDecksRepository } from '../../repositories/DecksRepository'
import decksData from './_mocks/decks.json'
import { IDeck } from 'models/Deck'

let deckCollection: Collection<IDeck>
let sut: ICardsRepository

describe('CardsRepository', () => {
  beforeAll(async () => {
    const db = (await MongoDB.createConnection()).db
    configDI(db)

    deckCollection = await MongoDB.getCollection('decks')
    sut = container.resolve('ICardsRepository')
  })

  beforeEach(async () => {
    await deckCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoDB.closeConnection()
  })

  describe('getRandom', () => {
    it('should get a random card in a random deck', async () => {
      deckCollection.insertMany(decksData)
      const result = await sut.getRandom(true)

      expect(result).toBeTruthy()
      expect(result.question).toBeTruthy()
      expect(result.answers).toBeTruthy()
      expect(result.answers.length).toBeGreaterThan(0)
    })

    it('should get a random card in a random deck without randomize answers', async () => {
      deckCollection.insertMany(decksData)
      const result = await sut.getRandom(false)

      expect(result).toBeTruthy()
      expect(result.question).toBeTruthy()
      expect(result.answers).toBeTruthy()
      expect(result.answers.length).toBeGreaterThan(0)
    })
  })
})
