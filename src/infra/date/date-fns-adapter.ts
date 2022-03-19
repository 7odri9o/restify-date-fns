import { DateFormatter } from '@/data/protocols/date-formatter'

import dateFns from 'date-fns'

export class DateFnsAdapter implements DateFormatter {
  format (date: string, expectedFormat: string): string {
    const formattedDate = dateFns.format(
      dateFns.parseISO(date),
      expectedFormat
    )
    return formattedDate
  }
}
