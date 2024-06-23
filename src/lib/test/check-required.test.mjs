import { checkRequired } from '../check-required'

describe('checkRequired', () => {
  const errorHandler = (msg) => throw new Error(msg)

  test('handles empty arguments spec', () =>
    expect(() => checkRequired({ errorHandler, options : {}, spec : [] })).not.toThrow())

  test('triggers error on missing required option', () => {
    const options = { foo : 'bar' }
    const spec = [{ name : 'foo' }, { name : 'baz', required : true }]
    expect(() => checkRequired({ errorHandler, options, spec })).toThrow(/Missing required option 'baz'./)
  })
})
