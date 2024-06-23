import { checkValidations } from '../check-validations'
import { setErrorHandler } from '../handle-error'

describe('checkValidations', () => {
  beforeAll(() => setErrorHandler((msg) => { throw new Error(msg) }))

  test('handles empty arguments', () =>
    expect(() => checkValidations({ options : {}, spec : { name : 'main' } })).not.toThrow())

  test('handles core validations', () => {
    const options = { foo : 'bar' }
    const spec = { name : 'main', arguments : [{ name : 'foo', validations : { 'min-length' : 4 } }] }
    expect(() => checkValidations({ options, spec })).toThrow(/Value must be at least 4 characters long/)
  })
})
