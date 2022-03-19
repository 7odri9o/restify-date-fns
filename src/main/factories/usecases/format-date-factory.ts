import { FormatDateImpl } from '@/data/usecases/format-date'
import { DateFnsAdapter } from '@/infra/date/date-fns-adapter'

export const makeFormatDate = (): FormatDateImpl => {
  const dateFnsAdapter = new DateFnsAdapter()
  const formatDate = new FormatDateImpl(dateFnsAdapter)
  return formatDate
}
