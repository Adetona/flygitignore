#! /usr/bin/env node

const { program } = require('commander')
const create = require('./bin/index.js')

program
    .command('create')
    .description('Create gitignore file.')
    .action(create)


program.parse()
