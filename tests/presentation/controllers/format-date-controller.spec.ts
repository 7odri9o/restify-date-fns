import { FormatDateController } from '@/presentation/controllers/format-date-controller'

const makeSut = (): SutTypes => {
  const sut = new FormatDateController()
  return {
    sut
  }
}

type SutTypes = {
  sut: FormatDateController
}

describe('FormatDate Controller', () => {
  test('Should return 400 if format is not provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        date: 'any_date'
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    const expected = {
      status: 400,
      error: new Error('Missing param: format')
    }
    expect(httpResponse).toEqual(expected)
  })
})
