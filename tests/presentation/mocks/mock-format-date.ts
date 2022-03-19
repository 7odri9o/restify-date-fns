import { FormatDate } from '@/domain/usecases/format-date'

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
