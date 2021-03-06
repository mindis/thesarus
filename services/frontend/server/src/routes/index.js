/**
 * Application's routes configuration
 */

// @flow
import { $App } from 'express'
import bodyParser from 'body-parser'

// import project's middlewares
import createJsonapiRequestType from '../middlewares/jsonapi-request-type'

// import project's routes
import rootRouter from './root'
import graphRouter from './api-v1/graph'

const jsonapiRequestType = createJsonapiRequestType()

const jsonBodyParser = bodyParser.json({
    type: 'application/vnd.api+json',
})

export default (app: $App) => {
    app.use('/api/v1/graph', [
        jsonBodyParser,
        jsonapiRequestType,
    ], graphRouter)

    // client rendering
    app.use('/', rootRouter)
}
