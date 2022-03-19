import { FormatDateController } from '@/presentation/controllers/format-date-controller'
import {
  HttpRequest
} from '@/presentation/controllers/format-date-controller-protocols'

import { ValidationSpy } from '@/tests/presentation/mocks'

import faker from '@faker-js/faker'

const mockHttpRequest = (): HttpRequest => ({
  body: {
    date: faker.date.past(),
    format: faker.random.word()
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
