const app = require('./app')
const databaseConnections = require('./config/db')
const PORT = 5000

databaseConnections()


const server = app.listen(PORT , () =>{
    console.log(`servr is running on ${PORT}`)
})

process.on('unhandledRejection' ,(err) =>{
    console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(()=>{
    process.exit(1)
  })
})