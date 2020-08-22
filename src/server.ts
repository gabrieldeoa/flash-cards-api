import 'reflect-metadata'
import { resolve } from 'path'
import { createExpressServer, useContainer } from 'routing-controllers'
import { container } from 'tsyringe'

import config from './config/Config'
import configDI from './config/DI'
import { MongoDB } from './config/MongoDB'

(async () => {
  const db = (await MongoDB.createConnection()).db

  configDI(db)

  useContainer({
    get: container.resolve.bind(container)
  })

  const app = createExpressServer({
    cors: true,
    classTransformer: true,
    controllers: [
      resolve(__dirname, 'controllers/*.ts')
    ]
  })

  app.listen(config.ServerPort)
  console.log(`Listening on port: ${config.ServerPort}`)
})()
