import { FormatDate } from '@/domain/usecases/format-date'
import { DateFormatter } from '@/data/protocols/date-formatter'

import faker from '@faker-js/faker'

export class FormatDateSpy implements FormatDate {
  date: string
  expectedFormat: string
  formattedDate: string

  format (date: string, expectedFormat: string): string {
    this.date = date
    this.expectedFormat = expectedFormat
    this.formattedDate = faker.random.word()
    return this.formattedDate
  }
}

export class DateFormatterSpy implements DateFormatter {
  date: string
  expectedFormat: string
  formattedDate: string

  format (date: string, expectedFormat: string): string {
    this.date = date
    this.expectedFormat = expectedFormat
    this.formattedDate = faker.random.word()
    return this.formattedDate
  }
}
