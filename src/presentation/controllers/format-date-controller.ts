export class FormatDateController {
  async handle (httpRequest: any): Promise<any> {
    const requiredFields = ['date', 'format']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          status: 400,
          error: new Error(`Missing param: ${field}`)
        }
      }
    }
  }
}
