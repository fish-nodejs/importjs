const Koa = require('koa')
const sayHi = require('./sayHi')

sayHi()

async function run(){
  await 2
  await 3
}