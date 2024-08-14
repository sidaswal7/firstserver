const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    let method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    } else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            let message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end()
    }
    
  //process.exit()
})

server.listen(4000, ()=>console.log("server listening on 4000"));