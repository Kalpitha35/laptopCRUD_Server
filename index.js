//import json-server
const jsonServer = require('json-server')

// create server
const productServer = jsonServer.create()

// set up path for db.json file
 const router = jsonServer.router("db.json")

// create middleware
const middleware = jsonServer.defaults()

// define a port for json server
const PORT = 4000 || process.env.PORT

// use middleware, router
productServer.use(middleware)
productServer.use(router)

// run server in given port to resolve client request
productServer.listen(PORT,()=>{
    console.log(`Product Server is started at PORT ${PORT} and waiting for client request!!!`);
    
})
