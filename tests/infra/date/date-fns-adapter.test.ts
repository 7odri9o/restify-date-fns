import { DateFnsAdapter } from '@/infra/date/date-fns-adapter'

import dateFns from 'date-fns'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DateFnsAdapter
}

const makeSut = (): SutTypes => {
  const sut = new DateFnsAdapter()
  return {
    sut
  }
}

jest.mock('date-fns', () => ({
  format: jest.fn(),

  parseISO: jest.fn()
}))

describe('DateFns Adapter', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  describe('Dependency calls', () => {
    test('Should call date-fns.format with correct values', () => {
      const { sut } = makeSut()
      const formatSpy = jest.spyOn(dateFns, 'format')
      const parseISOSpy = jest.spyOn(dateFns, 'parseISO')

      const date = '2022-03-19'
      const expectedFormat = 'yyyy-MM-dd'

      sut.format(date, expectedFormat)

      expect(formatSpy).toHaveBeenCalled()
      expect(parseISOSpy).toHaveBeenCalledWith(date)
    })
  })

  describe('Exceptions', () => {
    test('Should throw if date-fns.format throws', () => {
      const { sut } = makeSut()
      jest.spyOn(dateFns, 'format').mockImplementationOnce(() => {
        throw new Error()
      })

      const date = '2022-02-01'
      const expectedFormat = 'DD/MM/YYYY'

      expect(() => sut.format(date, expectedFormat)).toThrow()
    })
  })
})
