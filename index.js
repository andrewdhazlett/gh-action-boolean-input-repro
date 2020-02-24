const core = require('@actions/core')

const input = core.getInput('boolean-param')

if (input) {
  throw new Error(`Received truthy input ${input} of type ${typeof input}`)
}
