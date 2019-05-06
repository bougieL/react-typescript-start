const path = require('path')

function resolve(...p) {
  const rootDir = path.resolve(__dirname, '..')
  return path.resolve(rootDir, ...p)
}

module.exports = {
  appBuild: resolve('dist'),
  appPublic: resolve('public'),
  appHtml: resolve('public', 'index.html'),
  appIndexJs: resolve('src', 'index.tsx'),
  appPackageJson: resolve('package.json'),
  appSrc: resolve('src'),
  appTsConfig: resolve('tsconfig.json'),
  appNodeModules: resolve('node_modules'),
  binESLint: resolve('node_modules', '.bin', 'eslint'),
  binStyleLint: resolve('node_modules', '.bin', 'stylelint')
}