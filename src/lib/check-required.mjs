import { handleError } from './handle-error'

const checkRequired = ({ options, spec }) => {
  const required = spec.arguments?.filter(({ required }) => required === true).map(({ name }) => name) || []

  for (const req of required) {
    if (options[req] === undefined) {
      handleError(`Missing required option '${req}'.`)
    }
  }
}

export { checkRequired }
