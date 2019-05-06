const { exec } = require('../config/_utils')
const { binESLint, binStyleLint, appSrc } = require('../config/_paths')

exec(`${binESLint} --fix ${appSrc}/**/*.{ts,tsx}`)

exec(`${binStyleLint} --fix ${appSrc}/**/*.{css,scss}`)