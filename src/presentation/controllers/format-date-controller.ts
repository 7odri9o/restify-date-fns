import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class FormatDateController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
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
