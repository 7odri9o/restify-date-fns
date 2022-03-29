import { Controller } from '@/presentation/protocols'
import { FormatDateController } from '@/presentation/controllers/format/format-date-controller'
import { makeFormatDate } from '@/main/factories/usecases/format-date-factory'
import { makeFormatDateValidation } from '@/main/factories/validators/format-date-validation-composite-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'

export const makeFormatDateController = (): Controller => {
  const validation = makeFormatDateValidation()
  const formatDate = makeFormatDate()
  const controller = new FormatDateController(formatDate, validation)
  return makeLogControllerDecorator(controller)
}
