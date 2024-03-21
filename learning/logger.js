const EventEmmitter = require('events');

var url = 'http://mylogger.io/log';



class Logger extends EventEmmitter{
    log(message){
        console.log(message);

        //Reaise an event
        this.emit('messageLogged', {id: 1, url: url});
    }
}

        

    
    // module.exports.url = url;
    
    module.exports = Logger;