const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>My First Page</title><body><h1>Welcome to Node Js</h1></body></head>')
        res.write('</html>')
        return res.end()
    } else if(url === '/home'){
        res.write('<html>')
        res.write('<head><title>My First Page</title><body><h1>This is the Homepage</h1></body></head>')
        res.write('</html>')
        return res.end()
    }
    console.log("Siddhant")
  //process.exit()
})

server.listen(4000);