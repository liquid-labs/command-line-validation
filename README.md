# command-line-validation

Validates command line arguments. A companion to [command-line-args](https://github.com/liquid-labs/command-line-args) and [command-line-documentation](https://github.com/liquid-labs/command-line-documentation) and related packages.

## Install

```bash
npm i command-line-validation
```

## Usage

```javascript

import commandLineArgs from 'command-line-args'
import { commandLineValidation } from 'command-line-validation'

const cliSpec = {
  mainCommand : 'foo',
  arguments   : [
    { name : 'option1', required : true },
    { name : 'option2', validations : { 'match-re' : /[a-z0-9]+/, 'max-length' : 1 }}
  ]
}

const argsSpec = cliSpec.arguments
const options = commandLineArgs(argsSpec)
commandLineValidation({ options, spec : argsSpec})
// By default:
// - if 'option1' is present and 'option2' is either not present or matches the RE, returns with no action 
// - if 'option1' is missing, prints "Missing required option 'option1'." and exits the process with code 1
// - if 'option1' is present and 'option2' is invalid, prints description of validation failure and exits the process 
//   with code 1
```

## API Reference

### `commandLineValidation({ errorHandler, options, spec, validators })`

__Parameters__:
- `errorHandler` : (optional, function) A function which takes a single string argument which is the error message. If not defined, then will use default handler which prints error message to `process.stderr` and exits with a code of 1. Passing in an `errorHandler` will override the dafault error handler or any handler set with [`setErrorHandler`](#seterrorhandler-handler).
- `options` : (object, default: `{}`) A object mapping option names to values. Generally generated by `commandLineArgs` from the [command-line-args](https://github.com/liquid-labs/command-line-args) package.
- `spec` : (object, default: `[]`) An array defining possible options and validations. See [spec format](#spec-format) below.
- `validators` : (optional, object) An object mapping validation names to validation functions. These validators are used to extend the core validators from [specify-string](https://github.com/liquid-labs/specify-string).

Validates options against a standard [arguments/options specification](#spec-format). By default if there is a missing required parameter or invalid value, prints a descriptive error message to `process.stderr` and exits with code 1. The default handling can be modified by passing in an `errorHandler` or by calling [`setErrorHandler()`](#seterrorhandler-handler)

### `setErrorHandler(handler)`

__Parameters__:
- `handler` : (required, function) A function which takes a single string argument which is the error message.

Can be used to globally set the error handler. Any `errorHandler` passed directly to [`commandLineValidation()`](#commandlinevalidation-errorhandler-options-spec-validators) will override the global error handler. For example, if we wanted to change the output to use a logger and modify the exit code, we would:
```javascript
const errorHandler = (msg) = { logger.error(msg); process.exit(20) }
setErrorHandler(errorHandler)
```

## Spec format

The spec passed to [`commandLineValidation()`](#commandlinevalidation-errorhandler-options-spec-validators) is an array of objects, where each defines:
- `name` : (string) The name of the option.
- `required` : (optional, boolean) If true, then if the named option isn't in the `options`, an error is reported to the error handler.
- `validations` : (optional, object) Defines validations according to the [specify-string](https://github.com/liquid-labs/specify-string) specification.



