import { validateString, validateStringSpec } from 'specify-string'

import { handleError } from './handle-error'

const checkValidations = ({ options, spec, validators }) => {
  const { arguments: args = [] } = spec
  for (const { name, validations } of args) {
    const value = options[name]

    if (value !== undefined && validations !== undefined) {
      validateStringSpec({ spec : validations, validators })

      const result = validateString({ spec : validations, validators, value })
      if (result !== true) {
        handleError(result)
      }
    }
  }
}

export { checkValidations }
