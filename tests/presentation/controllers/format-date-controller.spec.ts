import { FormatDateController } from '@/presentation/controllers/format-date-controller'

import { ValidationSpy } from '@/tests/presentation/mocks'

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new FormatDateController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

type SutTypes = {
  sut: FormatDateController
  validationSpy: ValidationSpy
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

  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()

    const httpRequest = {
      body: {
        date: 'any_date',
        format: 'any_format'
      }
    }
    await sut.handle(httpRequest)

    const expected = httpRequest.body
    expect(validationSpy.input).toEqual(expected)
  })
})
