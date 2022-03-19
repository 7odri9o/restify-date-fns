import { FormatDateController } from '@/presentation/controllers/format-date-controller'
import {
  badRequest,
  serverError,
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
  describe('Dependencies Calls', () => {
    test('Should call Validation with correct values', async () => {
      const { sut, validationSpy } = makeSut()

      const httpRequest = mockHttpRequest()
      await sut.handle(httpRequest)

      const expected = httpRequest.body
      expect(validationSpy.input).toEqual(expected)
    })
  })

  describe('Handle Exceptions', () => {
    test('Should return 400 if Validation fails', async () => {
      const { sut, validationSpy } = makeSut()
      validationSpy.error = new Error()

      const httpRequest = mockHttpRequest()
      const httpResponse = await sut.handle(httpRequest)

      const expected = badRequest(validationSpy.error)
      expect(httpResponse).toEqual(expected)
    })

    test('Should return 500 if Validation throws', async () => {
      const { sut, validationSpy } = makeSut()
      jest.spyOn(validationSpy, 'validate').mockImplementationOnce(() => {
        throw new Error()
      })

      const httpRequest = mockHttpRequest()
      const httpResponse = await sut.handle(httpRequest)

      const expected = serverError(new Error())
      expect(httpResponse).toEqual(expected)
    })
  })
})
