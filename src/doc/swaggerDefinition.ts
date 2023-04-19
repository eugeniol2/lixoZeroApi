import createUser from './paths/createUser'

export const swaggerDefinition = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'API de Usuários',
    description: 'API para criação de usuários'
  },
  basePath: '/',
  schemes: ['http'],
  produces: ['application/json'],
  consumes: ['application/json'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [
    {
      Bearer: []
    }
  ],
  paths: {
    ...createUser
  }
}
