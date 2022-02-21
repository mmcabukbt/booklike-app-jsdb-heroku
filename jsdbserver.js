const jsonServer = require('json-server')
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
	static: "./build",
})
const port = process.env.PORT || 3030;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)


server.use(
	jsonServer.rewriter({
		"/api/*": "/$1"
	})
)

server.use(cors());
// Use default router
server.use(router)
server.listen(port, () => {
	console.log(`JSON-SERVER (JSDB) JJJJ ==> ${port} portunda AYAKTA`)
})