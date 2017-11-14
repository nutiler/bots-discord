//DISCORDIE BOT FOR www.STORMHEART.NET

// Setting up NODE enviorment.
require('dotenv')
    .config();
var Discordie = require('discordie');
var Events = Discordie.Events;
var client = new Discordie({
    autoReconnect: true
});
// Private keys in .env
var clientid = process.env.clientid;
client.connect({
    token: process.env.token
});
// Startup logging.
client.Dispatcher.on('GATEWAY_READY', e => {
    console.log('---------------------------- DISCORD.STORMHEART.NET --------------------------');
    console.log('CONNECTED AS: ' + client.User.username + '\t#' + client.User.discriminator);
    console.log('------------------------------------------------------------------------------')
    console.log('SERVERS CONNECTED: ' + client.Guilds.size + ', ONLY STORMHEART.NET');
    console.log('CHANNELS CONNECTED: ' + client.Channels.size);
    console.log('USERS CONNECTED: ' + client.Users.size);
    console.log('-------------------------------- INVITE LINK ---------------------------------')
    console.log('https://discordapp.com/oauth2/authorize?client_id=' + clientid + '&scope=bot')
    console.log('------------------------------------------------------------------------------')
});
// Check messages if a valid command.
client.Dispatcher.on('MESSAGE_CREATE', e => {
    const content = e.message.content;
    const channel = e.message.channel;
    const guild = e.message.channel.guild;
    const author = e.message.author;
    // Registration.
    if (content == '/register') {
        e.message.reply('I have just sent you a message on how to register.')
        let registerkey = (parseInt((Math.random() * 9000) + 1000));
        author.openDM()
            .then(function(dm) {
                dm.sendMessage(
                    'Welcome to STORMHEART,\n\n' +
                    'I see that you trying to register your minecraft account with our discord server.\n' +
                    'Let me help you, you will first need a registry key. I can provide you with one right now!\n\n' +
                    'You will now need to be logged onto STORMHEART to execute this command.\n\n' +
                    'SERVER COMMAND: ``/register ' + registerkey + '``\n\n' +
                    'Once registered you will be granted full access to our discord community.\n' +
                    'Along with discord perks, you will recieve in-game benefits shortly!\n\n' +
                    'SERVER IP: mc.stormheart.net\n' +
                    'FORUMS: boards.stormheart.net\n' +
                    'DISCORD: http://discord.gg/JNAQFXt\n'
                );
            });
    }
    // Invite bot.
    if (content == '/invite')
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Bot Invite',
                value: 'https://discordapp.com/oauth2/authorize?client_id=' + clientid + '&scope=bot'
            }]
        });
    // View discord roles.
    if (content == '/roles') {
        var member = author.memberOf(e.message.guild);
        var roleNames = member.roles.map(role => role.name);
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Your Roles',
                value: (roleNames.join(', ') ||
                    'You should register with: /register')
            }]
        });
    }
    // Quick links.
    if (content == '/about') {
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Stormheart Information\n',
                value: '``SERVER IP:``\nmc.stormheart.net\n' +
                    '\n``FORUMS:``\nhttp://boards.stormheart.net\n' +
                    '\n``GUIDE:``\nhttp://guide.stormheart.net'
            }]
        });
    }
    // Channel information.
    // FIXME #'s are not hyperlinked. works if mentioned'
    if (content == '/channels') {
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Channel Information\n',
                value: '``#about`` \nGeneral information about STORMHEART.\n' +
                    '\n``#patches``\nUpdate logs can be viewed on our forums.\n' +
                    '\n``#general``\nAll discussion on the network\n' +
                    '\n``#minecraft``\nChat to the server through discord.\n' +
                    '\n``#random-nsfw``\nAnything included nsfw links.'
            }]
        });
    }
    // Help menu.
    if (content == '/help') {
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Stormheart Registration\n',
                value: '``/help``\nDisplays the help menu.\n' +
                    '\n``/about``\nDisplay general information about STORMHEART.\n' +
                    '\n``/register``\nLink your minecraft account with discord.\n' +
                    '\n``/stats``\nDisplay discord server information.\n' +
                    '\n``/channels``\nDisplay the information about channels.\n' +
                    '\n``/roles``\nView your discord roles.\n' +
                    '\n``/invite``\nInvite me to a new server.'
            }]
        });
    }
    // TODO turn into a function rather than force.
    // Depends on java plugin to call said function. :P
    if (content == '/registerme') {
        e.message.reply('You are now registered on STORMHEART!');
        client.Users.getMember(guild, author.id)
            .assignRole('272180101376901120');
    }
    // Return stats for players.
    if (content == '/stats') {
        // Get registered users by role.
        let registeredusers = 0;
        let onlineusers = client.Users.onlineMembersForGuild(guild)
            .length;
        let offlineusers = guild.member_count - onlineusers; // TODO
        for (var i = 0; i < guild.member_count; i++) {
            if (guild.members[i].hasRole('272180101376901120')) {
                registeredusers++;
            }
        }
        // console.log(guild.members[6].hasRole('272180101376901120'))
        channel.sendMessage('', false, {
            color: 0xff5555,
            fields: [{
                name: 'Stormheart Discord\n',
                value: '``Users: ``' + client.Users.size +
                    '\n\n``Registered: ``' + registeredusers +
                    '\n\n``Online: ``' + onlineusers +
                    '\n\n``Offline: ``' + offlineusers
            }]
        });
        console.log()
    }
    // TODO list.
    // Chat helper, 'how do i X'.
    // On join send DM welcoming.
});