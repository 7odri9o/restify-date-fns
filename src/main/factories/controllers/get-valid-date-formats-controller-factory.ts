import { Controller } from '@/presentation/protocols'
import { GetValidDateFormatsController } from '@/presentation/controllers/get-valid-date-formats/get-valid-date-formats-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { DatePatternEnum } from '@/domain/enums/date-pattern-enum'

export const makeGetValidDateFormatsController = (): Controller => {
  const validFormats = Object.values(DatePatternEnum)
  const controller = new GetValidDateFormatsController(validFormats)
  return makeLogControllerDecorator(controller)
}
