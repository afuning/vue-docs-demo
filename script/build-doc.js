/* eslint-disable no-console */
const path = require('path')
const execa = require('execa')
const ora = require('ora')
const spinner = ora()
const chalk = require('chalk')

const log = console.log
const docPath = path.resolve(__dirname, '../doc')
const publickPath = path.resolve(__dirname, '../public/')

var now = Date.now()
// 打包文档
async function buildDoc () {
  try {
    spinner.text = '正在文档打包中'
    spinner.start()
    await execa('npm', ['run', 'build:doc'])
    spinner.stop()
    log(`${chalk.green('打包完成，等待复制')}`)
  } catch (e) {
    throw Error(e.message)
  }
}

// 复制文档
async function copyDoc () {
  try {
    spinner.text = '开始移动文件'
    spinner.start()
    await execa('cp', ['-R', docPath, publickPath])
    await execa('rm', ['-rf', docPath])
    spinner.stop()
    log(`${chalk.green('移动成功')}`)
  } catch (e) {
    throw Error(e.message)
  }
}

async function run () {
  try {
    await buildDoc()
    await copyDoc()
    var end = Date.now()
    log(`${chalk.green('文档构建成功，耗时：')}${end - now}`)
  } catch (e) {
    spinner.stop()
    log(`${chalk.red(e.message)}`)
    process.exit(1)
  }
}
// 执行
run()
