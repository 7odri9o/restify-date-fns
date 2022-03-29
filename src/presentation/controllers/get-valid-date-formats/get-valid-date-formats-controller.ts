import {
  ok, serverError, Controller,
  HttpRequest, HttpResponse
} from './get-valid-date-formats-controller-protocols'

export class GetValidDateFormatsController implements Controller {
  constructor (private readonly validFormats: string[]) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok(this.validFormats)
    } catch (error) {
      return serverError(error)
    }
  }
}
