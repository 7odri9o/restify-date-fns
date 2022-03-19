import { FormatDateImpl } from '@/data/usecases/format-date'

import {
  DateFormatterSpy
} from '@/tests/presentation/mocks'

type SutTypes = {
  sut: FormatDateImpl
  dateFormatterSpy: DateFormatterSpy
}

const makeSut = (): SutTypes => {
  const dateFormatterSpy = new DateFormatterSpy()
  const sut = new FormatDateImpl(dateFormatterSpy)
  return {
    sut,
    dateFormatterSpy
  }
}

describe('FormatDate Usecase', () => {
  describe('Dependencies Calls', () => {
    test('Should call DateFormatter with correct values', () => {
      const { sut, dateFormatterSpy } = makeSut()

      const date = '2022-02-01'
      const expectedFormat = 'DD/MM/YYYY'
      sut.format(date, expectedFormat)

      expect(dateFormatterSpy.date).toBe(date)
      expect(dateFormatterSpy.expectedFormat).toBe(expectedFormat)
    })
  })

  describe('Handle Exceptions', () => {
    test('Should throw if DateFormatter throws', () => {
      const { sut, dateFormatterSpy } = makeSut()
      jest.spyOn(dateFormatterSpy, 'format').mockImplementationOnce(() => {
        throw new Error()
      })

      const date = '2022-02-01'
      const expectedFormat = 'DD/MM/YYYY'

      expect(() => sut.format(date, expectedFormat)).toThrow()
    })
  })
})
