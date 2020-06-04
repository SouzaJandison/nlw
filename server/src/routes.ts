import express from 'express'

import knex from './database/connection'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import Knex from 'knex'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.get('/test', async (request, response ) => {
    const result = await knex('points').select('*')
    //const result = await knex('point_items').select('*')

    return response.json(result)
})

export default routes