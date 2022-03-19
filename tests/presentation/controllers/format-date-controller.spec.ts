import { FormatDateController } from '@/presentation/controllers/format-date-controller'
import {
  HttpRequest
} from '@/presentation/controllers/format-date-controller-protocols'

import { ValidationSpy } from '@/tests/presentation/mocks'

const mockHttpRequest = (): HttpRequest => ({
  body: {
    date: 'any_date',
    format: 'any_format'
  }
})

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
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()

    const httpRequest = mockHttpRequest()
    await sut.handle(httpRequest)

    const expected = httpRequest.body
    expect(validationSpy.input).toEqual(expected)
  })
})
