import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeFormatDateController } from '@/main/factories/controllers/format-date-controller-factory'
import { makeGetValidDateFormatsController } from '@/main/factories/controllers/get-valid-date-formats-controller-factory'

export default (router: Router): void => {
  router.post('/format', adaptRoute(makeFormatDateController()))
  router.get('/format/formats', adaptRoute(makeGetValidDateFormatsController()))
}
