const Discord = require("discord.js");

const PREFIX = "&";

var client = new Discord.Client();

const TOKEN = "NDEzMjMwODM0MDYxOTM0NTk3.DWVzfw.bWTpgGVyounGXXHb_01MT2ceeio";

client.on("ready", function(message) {
    console.log("Logged in as ${client.user.tag}")
});

client.on("message", function(message) {
    if(message.author.equals(client.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

    case "ping":
    message.channel.sendMessage("pong!")
    break;
            
    case "hi":
    message.channel.sendMessage("hey")
    break;
    }
});
client.login(TOKEN)
