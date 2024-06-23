import { checkValidations } from '../check-validations'

describe('checkValidations', () => {
  const errorHandler = (msg) => throw new Error(msg)

  test('handles empty arguments spec', () =>
    expect(() => checkValidations({ errorHandler, options : {}, spec : [] })).not.toThrow())

  test('handles core validations', () => {
    const options = { foo : 'bar' }
    const spec = [{ name : 'foo', validations : { 'min-length' : 4 } }]
    expect(() => checkValidations({ errorHandler, options, spec })).toThrow(/Value must be at least 4 characters long/)
  })
})
