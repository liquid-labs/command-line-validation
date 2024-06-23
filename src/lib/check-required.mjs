const checkRequired = ({ errorHandler, options, spec = [] }) => {
  const required = spec.filter(({ required }) => required === true).map(({ name }) => name) || []

  for (const req of required) {
    if (options[req] === undefined) {
      errorHandler(`Missing required option '${req}'.`)
    }
  }
}

export { checkRequired }
