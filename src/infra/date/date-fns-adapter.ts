import { DateFormatter } from '@/data/protocols/date-formatter'

import { format, parseISO } from 'date-fns'

export class DateFnsAdapter implements DateFormatter {
  format (date: string, expectedFormat: string): string {
    const formattedDate = format(
      parseISO(date),
      expectedFormat
    )
    return formattedDate
  }
}
