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
      body: new Error('Missing param: format')
    }
    expect(httpResponse).toEqual(expected)
  })

  test('Should return 400 if date is not provided', async () => {
    const { sut } = makeSut()

    const httpRequest = {
      body: {
        format: 'any_format'
      }
    }
    const httpResponse = await sut.handle(httpRequest)

    const expected = {
      status: 400,
      body: new Error('Missing param: date')
    }
    expect(httpResponse).toEqual(expected)
  })
})
