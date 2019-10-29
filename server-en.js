const http = require('http')
const port = 3002
const ip = 'localhost'

const server = http.createServer((req, ans) => {
	console.log('Server: request incoming ...')
	ans.end('Node.js server up!')
})

server.listen(port, ip, () => {
	console.log('Server host running on http://${ip}:${port}')
	console.log('To Shut the server down, press: ctrl + c');
})