const http = require('http');

const server = http.createServer((req,res)=>{
  console.log("Siddhant")
  process.exit()
})

server.listen(4000);