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
  receivedDate: null as number | Date,
  receivedFormat: null as string,
  receivedArgument: null as string,
  formattedDate: null as string,
  parsedDate: null as Date,

  format (date: number | Date, format: string): string {
    const originalDateFns = jest.requireActual('date-fns')

    this.receivedDate = date
    this.receivedFormat = format
    this.formattedDate = originalDateFns.format(date, format)
    return this.formattedDate
  },

  parseISO (argument: string): Date {
    const originalDateFns = jest.requireActual('date-fns')

    this.argument = argument
    this.parsedDate = originalDateFns.parseISO(argument)
    return this.parsedDate
  }
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

      const date = '2022-03-19'
      const expectedFormat = 'yyyy-MM-dd'

      sut.format(date, expectedFormat)

      const receivedDateName = 'receivedDate'
      const parsedDateName = 'parsedDate'
      const receivedFormatName = 'receivedFormat'
      expect(dateFns[receivedDateName]).toBe(dateFns[parsedDateName])
      expect(dateFns[receivedFormatName]).toBe(expectedFormat)
    })
  })
})
