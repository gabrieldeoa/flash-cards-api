import 'reflect-metadata'

import { container } from 'tsyringe'
import { Db } from 'mongodb'

import DecksService from '../services/DecksService'
import DecksRepository from '../repositories/DecksRepository'
import { Deck, IDeck } from '../models/Deck'

const DecksDIConfig = (db: Db) => {
  container.register('IDecksService', {
    useClass: DecksService
  })

  container.register('IDecksRepository', {
    useClass: DecksRepository
  })

  container.register('DecksCollection', {
    useValue: db.collection<Deck>(Deck.collectionName)
  })
}

export default DecksDIConfig
