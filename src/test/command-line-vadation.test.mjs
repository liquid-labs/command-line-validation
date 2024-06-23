import { commandLineValidation } from '../command-line-validation'

describe('commandLineValidation', () => {
  test('finds missing options', () => {
    let errorMsg
    commandLineValidation({
      errorHandler : (msg) => { errorMsg = msg },
      options      : {},
      spec         : { arguments : [{ name : 'foo', required : true }] }
    })
    expect(errorMsg).toMatch(/foo/)
  })

  test('find invalid options', () => {
    let errorMsg
    commandLineValidation({
      errorHandler : (msg) => { errorMsg = msg },
      options      : { foo : 'bar' },
      spec         : { arguments : [{ name : 'foo', validations : { 'min-length' : 4 } }] }
    })
    expect(errorMsg).toMatch(/Value must be at least 4 characters long/)
  })
})
