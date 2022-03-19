import {
  badRequest, ok, serverError, Controller,
  HttpRequest, HttpResponse,
  FormatDate,
  Validation
} from './format-date-controller-protocols'

export class FormatDateController implements Controller {
  constructor (
    private readonly formatDate: FormatDate,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { date, expectedFormat } = httpRequest.body
      const formattedDate = this.formatDate.format(date, expectedFormat)
      return ok({ date: formattedDate })
    } catch (error) {
      return serverError(error)
    }
  }
}
