import { validateString, validateStringSpec } from 'specify-string'

const checkValidations = ({ errorHandler, options, spec = [], validators }) => {
  for (const { name, validations } of spec) {
    const value = options[name]

    if (value !== undefined && validations !== undefined) {
      validateStringSpec({ spec : validations, validators })

      const result = validateString({ spec : validations, validators, value })
      if (result !== true) {
        errorHandler(result)
      }
    }
  }
}

export { checkValidations }
