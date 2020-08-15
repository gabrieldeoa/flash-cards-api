import CardsDIConfig from '../di/CardsDI'
import DecksDIConfig from '../di/DecksDI'
import { Db } from 'mongodb'

const configDI = (db: Db) => {
  CardsDIConfig()
  DecksDIConfig(db)
}

export default configDI
