import { checkRequired } from './lib/check-required'
import { checkValidations } from './lib/check-validations'
import { setErrorHandler } from './lib/handle-error'

const commandLineValidation = ({ errorHandler, options, spec, validators }) => {
  if (errorHandler !== undefined) {
    setErrorHandler(errorHandler)
  }
  checkRequired({ options, spec })
  checkValidations({ options, spec, validators })
}

export { commandLineValidation, setErrorHandler }
