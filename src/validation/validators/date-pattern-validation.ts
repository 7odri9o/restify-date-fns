import { Validation } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'
import { DatePatternEnum } from '@/domain/enums/date-pattern-enum'

export class DatePatternValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    const inputValue = input[this.fieldName]
    if (!DatePatternEnum[inputValue]) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
