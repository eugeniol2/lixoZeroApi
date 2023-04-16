import { type Application } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { swaggerDefinition } from 'src/doc/swaggerDefinition'

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

export const swagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
