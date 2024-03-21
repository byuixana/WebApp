// const http = require('http');

// //This is an event emitter
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST' && req.url === '/submitCreatorData') {
//         let requestData = '';

//         req.on('creatorData', chunk =>{
//                 requestData += chunk;
//         });
//         req.on('end', () => {

//                 const creatorData = JSON.parse(requestData);
        
//                 console.log('Recieved data:', creatorData);
        
//                 res.writeHead(200, {'Content-Type': 'text/plain'});
//                 res.end('Recieved');
//         });
//     } else{
//         res.writeHead(404, {'Content-type': 'text/plain'});
//         res.end('Not Found');
//     } 
// });

// const PORT = 3000;

// server.on('connection', (socket) =>{
//     console.log('New connection......')
// })

// // Starts up the server
// server.listen(PORT, () => {
//     console.log('Server running')
// })

// console.log('Listening on port 3000....')