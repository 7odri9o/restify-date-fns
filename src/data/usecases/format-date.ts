import { FormatDate } from '@/domain/usecases/format-date'
import { DateFormatter } from '@/data/protocols/date-formatter'

export class FormatDateImpl implements FormatDate {
  constructor (
    private readonly dateFormatter: DateFormatter
  ) {}

  format (date: string, expectedFormat: string): string {
    const formattedDate = this.dateFormatter.format(date, expectedFormat)
    return formattedDate
  }
}
