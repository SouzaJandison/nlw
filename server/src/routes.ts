import express from 'express'
import multer from 'multer'

import multerConfig from './config/multer'
import knex from './database/connection'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import { celebrate, Joi} from 'celebrate'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post(
  '/points', 
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      uf: Joi.string().required().max(2),
      city: Joi.string().required(),
      items: Joi.string().required()
    })
  }),
  pointsController.create
)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes