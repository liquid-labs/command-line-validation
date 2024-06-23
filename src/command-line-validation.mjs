import { checkRequired } from './lib/check-required'
import { checkValidations } from './lib/check-validations'
import { handleError, setErrorHandler } from './lib/handle-error'

const commandLineValidation = ({ errorHandler = handleError, options = {}, spec = [], validators }) => {
  checkRequired({ errorHandler, options, spec })
  checkValidations({ errorHandler, options, spec, validators })
}

export { commandLineValidation, setErrorHandler }
