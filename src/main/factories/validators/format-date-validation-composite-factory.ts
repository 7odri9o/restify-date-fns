import {
  DatePatternValidation,
  RequiredFieldValidation,
  ValidationComposite
} from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'

export const makeFormatDateValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['date', 'expectedFormat']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new DatePatternValidation('expectedFormat'))
  return new ValidationComposite(validations)
}
