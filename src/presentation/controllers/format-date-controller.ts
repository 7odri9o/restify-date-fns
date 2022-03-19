import {
  badRequest, serverError, Controller,
  HttpRequest, HttpResponse,
  Validation
} from './format-date-controller-protocols'

export class FormatDateController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
