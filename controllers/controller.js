const axios = require('axios')
module.exports = {
    helpCommand: (arguments, recievedMessage) => {
        if (arguments.length == 1) {
            recievedMessage.channel.send("Greshka probvai !")
        } else {
let mms = `diff\n
-BOTA NE E 112\n
`;
            recievedMessage.channel.send("```" + mms + "```")
        }  
    },
    name: (arguments, recievedMessage, client) => {
                let arg;
                if (arguments == 'ЖЕНА') {
                    arg = 'female'
                } else if (arguments == 'МЪЖ') {
                    arg = 'male'
                } else {
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
            },
    Dai: (arguments, recievedMessage, client) => {
            var generalChannel = client.channels.get("535073760731070496")
            let pic = 'https://m.netinfo.bg/media/images/32815/32815064/960-540-zh.jpg'
                if (arguments == '5lv' || arguments == '5лв') {
                    generalChannel.send(pic)
                } else {
                    recievedMessage.channel.send(`КОЛКО ИСКАШ .. `)
                }
            },
    fraza: (arguments, recievedMessage, client) => {
                var title;
                var text;
                axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`)
                    .then(function (response) {

                        title = response.data[0].title
                        text = response.data[0].content.replace(/<\/?p[^>]*>/g, "");
                    })
                    .then(() => {
                        let fullData = `Author:${title}\n${text}`
                        recievedMessage.channel.send(`${arguments == 'all' ? '@everyone' : ''}` + "```" + fullData + "```")
                    })
            },
    proverka: (arguments, recievedMessage, client) => {
        var ime = arguments
        axios.get(`http://10.10.0.239:5555/users/${arguments}`)
            .then(function (response) {
                console.log(ime)
                // console.log(response.data[0])
                if (response.data[0] !== undefined){
                    recievedMessage.channel.send(`IMA TEKAV USER: ${ime}`)
                }else{
                    recievedMessage.channel.send(`NEMA V BAZATA `)
                }
                // console.log(response.data)
            })
    },
        dobavi: (arguments, recievedMessage, client) => {
        var ime = arguments
        axios.post(`http://10.10.0.239:5555/users/`, {
            firstName: ime
        })
            .then(function (response) {
                // console.log(response.data[0])
                if (ime[0] !== undefined) {
                    recievedMessage.channel.send(`ZAPISAH IME: ${ime}`)
                } else {
                    recievedMessage.channel.send(`DAI MI IME`)
                }
                // console.log(response.data)
            })
    }

}