const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.use(express.static('js'))

//Set up the host and port
const host = '127.0.0.1';
const PORT = 3001;

//Takes users right to the index.
app.get('/playthink', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    let name = req.body.projectName;
    let type = req.body.projectType;
    // res.send(name, type);
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
    res.sendFile(__dirname + '/index.html');
    // res.render()

})

app.listen(PORT, host, () => {
    console.log(`Server running for index.html on ${PORT}`);
})