let errorHandler = (msg) => {
  process.stderr.write(msg + '\n')
  process.exit(1) // eslint-disable-line no-process-exit
}

const handleError = (msg) => errorHandler(msg)

const setErrorHandler = (handler) => { errorHandler = handler }

export { handleError, setErrorHandler }
