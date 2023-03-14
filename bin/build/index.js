const cp = require('child_process')
const path = require('path')

let npm = 'npm.cmd'

const { status } = cp.spawnSync(npm, ['run', `build`, '--', '--win'], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
})

process.exit(status)
