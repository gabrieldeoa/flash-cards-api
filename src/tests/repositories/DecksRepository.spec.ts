import 'reflect-metadata'
import { Collection } from 'mongodb'
import { container } from 'tsyringe'

import configDI from '../../config/DI'

import { MongoDB } from '../../config/MongoDB'
import { IDecksRepository } from '../../repositories/DecksRepository'
import decksData from './_mocks/decks.json'
import { IDeck } from 'models/Deck'

let deckCollection: Collection<IDeck>
let sut: IDecksRepository

describe('DecksRepository', () => {
  beforeAll(async () => {
    const db = (await MongoDB.createConnection()).db
    configDI(db)

    deckCollection = await MongoDB.getCollection('decks')
    sut = container.resolve('IDecksRepository')
  })

  beforeEach(async () => {
    await deckCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoDB.closeConnection()
  })

  describe('getRandom', () => {
    it('should get a random deck', async () => {
      deckCollection.insertMany(decksData)
      const result = await sut.getRandom()

      expect(result).toBeTruthy()
      expect(result.name).toBeTruthy()
      expect(result.visibility).toBeTruthy()
      expect(result.cards.length).toBeGreaterThan(0)
    })

    it('should get a random card on specific deck', async () => {
      deckCollection.insertMany(decksData)
      const { _id } = await deckCollection.findOne({})
      const result = await sut.getRandomCard(_id)

      expect(result).toBeTruthy()
      expect(result.question).toBeTruthy()
      expect(result.answers).toBeTruthy()
      expect(result.answers.length).toBeGreaterThan(0)
    })
  })
})
