const Discord = require('discord.js')
const client = new Discord.Client()
const Activities = require('./activities/activities.js')
const Config = require('./config.js')


client.on('ready', async () => {
    let avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    // client.users.avatar = avatar
    // console.log("CLIENT ON ", client.users.avatar)
    console.log(`Connected as ${client.user.tag}`)

    // console.log(client)
    client.user.setActivity('PRILOJENIE ZA +18', {type: "Creating"})

    client.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
            console.log(` = ${channel.name} ${channel.type},ID= ${channel.id}`)
        })
    })

})

client.on('message', (recievedMessage) => {
    if(recievedMessage.author == client.user){
        return
    }
    if(recievedMessage.content.startsWith("$")){
        // recievedMessage.channel.send(`ISAKAM DA KAJA: ------- MESSAGE :  ` + recievedMessage.content)
        Activities.processCommand(recievedMessage, client)
    }
})

client.login(Config.token)
