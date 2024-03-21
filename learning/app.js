// //Define function

// // function sayHello(name){
// //     console.log('Hello' + name)
// // }

// // sayHello('Alexandra')

// // //This does not work because we do not have the browswer tools here.
// // console.log(window)

// //Learn what modules are

// //Window objects in JS
// // console.log();

// // setTimeout();
// // clearTimeout();

// // setInterval();

// // clearInterval();

// // window.setTimeout();



// //In Node, we use global instead of window
// // var message = '';
// // globalThis.setTimeout

// // var sayHello = function(){

// // }

// // window.sayHello();

// //How to use modules

// // console.log(module);

// const log = require('./logger');

// log('Hello');

// const path = require('path')

// const pathObj = path.parse(__filename)

// console.log(pathObj)

// const os = require('os')

// var memory = os.totalmem()
// var freeMemory = os.freemem()

// console.log(`Total memory: ${memory}`)
// console.log("Free memory:" + freeMemory)

// //How to work with files

// //File system module
// const fs = require('fs');

// //Always use asynchrnous methods in nose

// const files = fs.readdirSync('./');

// console.log(files)

// //To work with files, import the file module and always use asynchrnous methods
// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);

//     else console.log('Result')
// })

//This is a class, not a module.
const EventEmmiter = require('events');

//Register a listener       //Anonymous function

//Making a noise, produce ~

// emitter.emit('messageLogged', {id: 1, url:'http://'});

// emitter.on('logger', (arg) =>{
//     console.log('message', arg);
// });


const Logger = require('./logger');
const logger = new Logger();

// const log = require('./logger')
// log('message');

logger.on('messageLogged', (arg) => { //e or eventArg
    console.log('Listener called', arg) //Passes data about the event
})

logger.log('message');
