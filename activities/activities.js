const axios = require('axios')
function helpCommand(arguments, recievedMessage){
    if (arguments.length == 1) {
        recievedMessage.channel.send("Greshka probvai !")
    } else {
        recievedMessage.channel.send("BOTA NE E 112")
    }
}
function name(arguments, recievedMessage, client){
    let arg;        
    if (arguments == 'ЖЕНА'){
        arg = 'female'
    } else if (arguments == 'МЪЖ'){
        arg = 'male'
    }else{
        arg = arguments
    }
    var fullname;
    var pic;
    
    axios.get(`https://randomuser.me/api/?gender=${arg}`)
    .then(function (response) {
        // handle success
        fullname = response.data.results[0].name.first + " " + response.data.results[0].name.last
        pic = response.data.results[0].picture.large
    }).then(() => {
        if (arguments.length === 1) {
            var generalChannel = client.channels.get("535073760731070496")
                recievedMessage.channel.send(`${recievedMessage.author.toString()} > PADNATI SE : ${fullname.toUpperCase()}`)
                generalChannel.send(pic)
                
            } else {
                recievedMessage.channel.send(`ТУКА НЕ Е БЛАГОТВОРИТЕЛНОСТ`)
            }
        })
}
        function Dai(arguments, recievedMessage, client){
            var generalChannel = client.channels.get("535073760731070496")
            let pic = 'https://m.netinfo.bg/media/images/32815/32815064/960-540-zh.jpg'
            if (arguments == '5lv' || arguments == '5лв'){
                generalChannel.send(pic)
            }else{
                recievedMessage.channel.send(`КОЛКО ИСКАШ .. `)
            }
        }            
    module.exports = {
        processCommand: (recievedMessage, client) => {
                    
            let fullCommand = recievedMessage.content.substr(1)
            let splitCommand = fullCommand.split(" ")
            let primaryCommand = splitCommand[0]
            let arguments = splitCommand.slice(1)
            if (primaryCommand == "pomosht") {
                helpCommand(arguments, recievedMessage, client)
            } else if (primaryCommand == "ПОКАЖИ" || primaryCommand == "Tinder") {
                // console.log(primaryCommand)
                name(arguments, recievedMessage, client)
                // console.log("args", recievedMessage)
            } else if (primaryCommand == "ДАЙ"){
                Dai(arguments, recievedMessage, client)
            }
    }

    }
