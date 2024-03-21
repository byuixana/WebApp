const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css')
        }
    }
}));

app.get('/userLogin', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post('/userLogin', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email == "byuixana@byui.edu" && password == "12475"){
        res.sendFile(__dirname + '/index.html')
    }else{
        var tryAgainhtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Failed</title>
    </head>
    <body>
      <p><strong>If you put in the wrong password, go back. If you're a hacker, you're not cut out for hacking! Your mission really is impossible. Try better guesses.</strong><p>
      <a href="/userLogin">Go back to Login Page</a>
    </body>
    </html>
        `;
        res.send(tryAgainhtml);
    }
    console.log(req.body);
    // res.send(`Email: ${email}, Password: ${password}`)
})
const host = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, host, () => {
    console.log('Server running for login_backend');
})

// app.post('/submitCreatorData', (req, res) => {

//     console.log('Button clicked!')

//     res.send('<h1>Thank you for clicking the button!</h1>');
// }
// )
//     // console.log(req.method, req.url)

//     // if (req.method === 'POST' && req.url === '/submitCreatorData') {
        
//     //     let requestData = '';

//     //     req.on('data', chunk => {
//     //             requestData += chunk;
//     //     });
//     //     req.on('end', () => {

//     //             const creatorData = JSON.parse(requestData);
        
//     //             console.log('Recieved data:', creatorData);
        
//     //             res.writeHead(200, {'Content-Type': 'text/plain'});
//     //             res.end('Recieved');
//     //     });
//     // } else if(req.method === 'POST' && req.url === '/create-account') {
//     //     console.log('Working!!!');
//     //     res.redirect('/')
//     // }
//     // else if(req.method === 'GET' && req.url === "/"){
//     //     var login = fs.readFileSync('login.html');
//     //     res.statusCode = 200;
//     //     res.setHeader('Content-Type', 'text/html')
//     //     res.end(login)
//     // }
//     // else{
//     //     res.writeHead(404, {'Content-type': 'text/plain'});
//     //     res.end('Not Found');
//     // } 
// })
// // const { hostname } = require('os');


//This is an event emitter       request and response
// const server = http.createServer((req, res) => {
//     console.log(req.method, req.url)

//     if (req.method === 'POST' && req.url === '/submitCreatorData') {
        
//         let requestData = '';

//         req.on('data', chunk => {
//                 requestData += chunk;
//         });
//         req.on('end', () => {

//                 const creatorData = JSON.parse(requestData);
        
//                 console.log('Recieved data:', creatorData);
        
//                 res.writeHead(200, {'Content-Type': 'text/plain'});
//                 res.end('Recieved');
//         });
//     } else if(req.method === 'POST' && req.url === '/create-account') {
//         console.log('Working!!!');
//         res.redirect('/')
//     }
//     else if(req.method === 'GET' && req.url === "/"){
//         var login = fs.readFileSync('login.html');
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html')
//         res.end(login)
//     }
//     else{
//         res.writeHead(404, {'Content-type': 'text/plain'});
//         res.end('Not Found');
//     } 
// });




// // Starts up the server
// server.listen(PORT, host, () => {
//     console.log('Server running for login_backend');
// })

// console.log('Listening on port 3000....')