const Discord = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();
var async = require("async");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', ' REACTION'] });
const Distube = require('distube');
const distube = new Distube(client, { searchSongs: false, emitNewSongOnly: true })
const fs = require('fs');


const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {
    console.log('Speedbot is online!');
    client.user.setPresence({
        activity: {
            name: '[_] www.speedbot.ml',
            type: 'PLAYING'
        },
        status: 'ONLINE'
    })
        .then(console.log)
        .catch(console.error);
    memberCounter(client);
});








client.login('ODM1NDk0MzI3NjYzODUzNjE5.YIQQug.NlpB4V0AvjXDk9Q5cuAOthyuVXM');