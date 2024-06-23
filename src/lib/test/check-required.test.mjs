import { checkRequired } from '../check-required'
import { setErrorHandler } from '../handle-error'

describe('checkRequired', () => {
  beforeAll(() => setErrorHandler((msg) => { throw new Error(msg) }))

  test('handles no arguments', () =>
    expect(() => checkRequired({ options : {}, spec : { name : 'main' } })).not.toThrow())

  test('triggers error on missing required option', () => {
    const spec = { name : 'main', arguments : [{ name : 'foo' }, { name : 'baz', required : true }] }
    expect(() => checkRequired({ options : { foo : 'bar' }, spec })).toThrow(/Missing required option 'baz'./)
  })
})
