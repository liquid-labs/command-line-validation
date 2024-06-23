import { handleError } from '../handle-error'

describe('handleError', () => {
  let wroteToStdout, exitCode, origWrite, origExit

  beforeAll(() => {
    origWrite = process.stdout.write
    origExit = process.exit
    process.stdout.write = (msg) => { wroteToStdout = msg }
    process.exit = (code) => { exitCode = code }
    handleError('foo')
  })

  afterAll(() => {
    process.stdout.write = origWrite
    process.exit = origExit
  })

  test('writes error message to stdout by default', () => expect(wroteToStdout).toBe('foo\n'))

  test('exits with code 1 by default', () => expect(exitCode).toBe(1))
})
