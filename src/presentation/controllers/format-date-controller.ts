import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class FormatDateController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    const requiredFields = ['date', 'format']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          status: 400,
          body: new Error(`Missing param: ${field}`)
        }
      }
    }
  }
}
