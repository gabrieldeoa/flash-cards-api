import * as dotenv from 'dotenv'
process.env.DEBUG = 'mongo-seeding'

dotenv.config()

export default {
  ServerPort: process.env.PORT ?? '',
  MongoURL: process.env.MONGO_URL ?? ''
}
