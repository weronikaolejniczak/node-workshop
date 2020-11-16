const http = require('http');

const PORT = 3001;

http.createServer(function(request, response) {
    const responseData = {
        status: 'ok!'
    };

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    response.end(JSON.stringify(responseData));
}).listen(PORT);

console.log(`Node server is running on port ${PORT}.`)
