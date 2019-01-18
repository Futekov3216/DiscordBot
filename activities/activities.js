
const Controllers = require('./../controllers/controller.js')

module.exports = {
    processCommand: (recievedMessage, client) => {                    
                        let fullCommand = recievedMessage.content.substr(1)
                        let splitCommand = fullCommand.split(" ")
                        let primaryCommand = splitCommand[0]
                        let arguments = splitCommand.slice(1)
                        if (primaryCommand == "pomosht") {
                            Controllers.helpCommand(arguments, recievedMessage, client)
                        } else if (primaryCommand == "ПОКАЖИ" || primaryCommand == "Tinder") {
                            Controllers.name(arguments, recievedMessage, client)
                        } else if (primaryCommand == "ДАЙ"){
                            Controllers.Dai(arguments, recievedMessage, client)
                        }else if (primaryCommand == "quot"){
                            Controllers.fraza(arguments, recievedMessage, client)
                        } else if (primaryCommand == 'proverka'){
                            Controllers.proverka(arguments, recievedMessage, client)
                        } else if (primaryCommand == 'dobavi'){
                            Controllers.dobavi(arguments, recievedMessage, client)
                        }
                    }

}
