export class FormatDateController {
  async handle (httpRequest: any): Promise<any> {
    if (!httpRequest.body.format) {
      return {
        status: 400,
        error: new Error('Missing param: format')
      }
    }

    if (!httpRequest.body.date) {
      return {
        status: 400,
        error: new Error('Missing param: date')
      }
    }
  }
}
