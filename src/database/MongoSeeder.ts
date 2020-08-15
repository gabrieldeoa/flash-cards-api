import path from 'path'
import { Seeder } from 'mongo-seeding'
import config from '../config/Config'

(async () => {
  const options = {
    database: config.MongoURL,
    dropDatabase: true
  }

  const seeder = new Seeder(options)

  const collections = seeder.readCollectionsFromPath(
    path.resolve('./src/database/seeds'),
    {
      extensions: ['ts'],
      transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
    }
  )

  try {
    await seeder.import(collections)
    console.log('Seeder: Success')
  } catch (err) {
    console.log(`Seeder: Erro: ${err}`)
  }
})()
