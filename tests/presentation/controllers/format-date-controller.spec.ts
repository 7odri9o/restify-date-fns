import { FormatDateController } from '@/presentation/controllers/format/format-date-controller'
import {
  badRequest,
  ok,
  serverError,
  HttpRequest
} from '@/presentation/controllers/format/format-date-controller-protocols'

import { FormatDateSpy, ValidationSpy } from '@/tests/presentation/mocks'

import faker from '@faker-js/faker'

const mockHttpRequest = (): HttpRequest => ({
  body: {
    date: faker.date.past(),
    expectedFormat: faker.random.word()
  }
})

const makeSut = (): SutTypes => {
  const formatDateSpy = new FormatDateSpy()
  const validationSpy = new ValidationSpy()
  const sut = new FormatDateController(formatDateSpy, validationSpy)
  return {
    sut,
    formatDateSpy,
    validationSpy
  }
}

type SutTypes = {
  sut: FormatDateController
  formatDateSpy: FormatDateSpy
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

    test('Should call FormatDate with correct values', async () => {
      const { sut, formatDateSpy } = makeSut()

      const httpRequest = mockHttpRequest()
      await sut.handle(httpRequest)

      const expected = {
        date: httpRequest.body.date,
        expectedFormat: httpRequest.body.expectedFormat
      }
      expect(formatDateSpy.date).toEqual(expected.date)
      expect(formatDateSpy.expectedFormat).toEqual(expected.expectedFormat)
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

  describe('Success', () => {
    test('Should return 200 on format success', async () => {
      const { sut, formatDateSpy } = makeSut()

      const httpRequest = mockHttpRequest()
      const httpResponse = await sut.handle(httpRequest)

      const expected = ok({
        date: formatDateSpy.formattedDate
      })
      expect(httpResponse).toEqual(expected)
    })
  })
})
