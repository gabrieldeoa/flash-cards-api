import 'reflect-metadata'
import { resolve } from 'path'
import { createExpressServer, useContainer } from 'routing-controllers'
import { container } from 'tsyringe'

import './di'

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

app.listen(3333)
