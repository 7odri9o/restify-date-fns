import { DatePatternValidation } from '@/validation/validators/date-pattern-validation'
import { InvalidParamError } from '@/presentation/errors'

import faker from '@faker-js/faker'

const field = faker.random.word()

const makeSut = (): DatePatternValidation => {
  return new DatePatternValidation(field)
}

describe('DatePattern Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ invalidField: faker.random.word() })
    expect(error).toEqual(new InvalidParamError(field))
  })

  test('Should not return anything if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: 'yyyy-MM-dd' })
    expect(error).toBeFalsy()
  })
})
