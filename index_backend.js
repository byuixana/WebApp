const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

//Set up the host and port
const host = '127.0.0.1';
const PORT = 3001;

//Give the CSS to the page. Static files are what provide structure rather than function, so CSS files are static.
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css')
        }
    }
}));

//How to use frontend js with backend

app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'text/javascript');
        }
    }
}));


//Takes users right to the index.
app.get('/playthink', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


//Takes users to challenges page.
app.get('/challenges', (req, res) => {
    res.sendFile(__dirname + '/challenges.html');
})

//Why are you looking for pages that aren't there? notification.
// app.all('*', (req, res) => {
//     res.send('<h1>You are looking for a nonexistent page. Stinks for you! ;) </h1>')
// })

app.post('/playthink', (req, res) => {
    let name = req.body.projectName;
    let type = req.body.projectType;
    res.sendFile(__dirname + '/challenges.html');
})

app.listen(PORT, host, () => {
    console.log(`Server running for index.html on ${PORT}`);
})