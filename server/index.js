const http = require('http')
const userApi = require('./api/userApi')
const bodyParser = require('body-parser')
const express = require('express')

let app = express()
let server = http.createServer(app)

// 获取req,body参数的处理，放在api路由前面
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 后端api路由
app.use('/api/user', userApi)

// 监听端口
server.listen(3000, () => {
  console.log('success listen at port:3000......')
})
