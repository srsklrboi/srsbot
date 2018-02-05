const Discord = require("discord.js")

const PREFIX = "";

const TOKEN = "NDEwMDIzOTAxOTY0NTMzNzYw.DVnLaA.e9FbpcGmSrEF_8AAJGo7q80ys9M";

var bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("srsBot is now online and fully funtioning. Have fun!")
});

bot.on("message", function(message) {
    bot.user.setStatus('Online')
    bot.user.setGame('--help')
    if(message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0].toLowerCase()) {

    case "--ping":
    message.channel.sendMessage("pong!")
    break;
    
    case "hi":
    message.channel.sendMessage("Hi!")
    break;
    
    case "--credits":
    message.channel.sendMessage("I was coded by srsklrboii#2903, and only him!")
    break;

    case "bye":
    message.channel.sendMessage("Bye bye scrub.")
    break;

    case "cya":
    message.channel.sendMessage("Cya scrub.")
    break;

    case "--help":
    message.channel.sendMessage("Commands: (hi: replies 'Hi!') (bye: replies 'Bye bye scrub.') (cya: replies 'Cya scrub.') (--credits: sends you credits) (--ping: replies 'pong!')")
    break;

    case "good night":
    message.channel.sendMessage("Goodnight!")
    break;

    case "goodnight":
    message.channel.sendMessage("Goodnight!")
    break;

    case "good morning":
    message.channel.sendMessage("Good Morning!")
    break;

    case "oof":
    message.channel.sendMessage("OOF")
    break;

    case "lol":
    message.channel.sendMessage("lol indeed")
    break;

    }
});
bot.login(TOKEN)
