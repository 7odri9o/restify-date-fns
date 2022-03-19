import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.status > 299) {
      console.error(JSON.stringify(httpResponse.body.stack))
    }
    return httpResponse
  }
}
