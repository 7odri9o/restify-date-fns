import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeFormatDateController } from '@/main/factories/controllers/format-date-controller-factory'

export default (router: Router): void => {
  router.post('/format', adaptRoute(makeFormatDateController()))
}
