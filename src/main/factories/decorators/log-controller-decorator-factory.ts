import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'

export const makeLogControllerDecorator = (controller: Controller): LogControllerDecorator => {
  return new LogControllerDecorator(controller)
}
