const botSettings = require("./settings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({ disableEveryone: true });
const channel = bot.channels.get(botSettings.channelID);

// bot.on("ready", async() => {

//     try {

//         let link = await bot.generateInvite(["ADMINISTRATOR"]);

//         console.log('--------------------------------- INFERNAL BOT -------------------------------');
//         console.log('CONNECTED AS: ' + bot.user.username + '#' + bot.user.discriminator);
//         console.log('------------------------------------------------------------------------------');
//         console.log('SERVERS CONNECTED: ' + bot.guilds.size);
//         console.log('CHANNELS CONNECTED: ' + bot.channels.size);
//         console.log('USERS CONNECTED: ' + bot.users.size);
//         console.log('-------------------------------- INVITE LINK ---------------------------------');
//         console.log(link);
//         console.log('------------------------------------------------------------------------------');

//         bot.user.setPresence({ game: { name: 'Fight Caves ', type: 0 } });

//     }
//     catch (e) {
//         console.log(e.stack);
//     }

// });

// bot.on("guildCreate", guild => {
//   // This event triggers when the bot joins a guild.
//   console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
//   bot.user.setGame(`on ${bot.guilds.size} servers`);
// });

// bot.on("guildDelete", guild => {
//   // this event triggers when the bot is removed from a guild.
//   console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
//   bot.user.setGame(`on ${bot.guilds.size} servers`);
// });


bot.on('guildMemberAdd', member => {

    if (member.displayName === "Pink Clay" ||
        member.displayName === "PinkClay" ||
        member.displayName === "Pink_Clay" ||
        member.displayName === "Plnk Clay" ||
        member.displayName === "Pink CIay" ||
        member.displayName === "Plnk CIay" ||
        member.displayName === "PlnkCIay" ||
        member.displayName === "PinkCIay" ||

        member.displayName === "Infernal" ||
        member.displayName === "InfernaI" ||
        member.displayName === "lnfernal" ||
        member.displayName === "lnfernaI" ||

        member.displayName === "Infernal Bot" ||
        member.displayName === "InfernaI Bot " ||
        member.displayName === "lnfernal Bot" ||
        member.displayName === "lnfernaI Bot" ||

        member.displayName === "Infernal B0t" ||
        member.displayName === "InfernaI B0t " ||
        member.displayName === "lnfernal B0t" ||
        member.displayName === "lnfernaI B0t") {

        let imposter = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Warning! Imposter Banned.")
            .setDescription("Imposter Blocker has detected and blocked a malicious user joining.\nDue to an increase in imposters on Discord, **ALWAYS** request a private message from me on Sythe.org\n\n**Pink Clay#2390** with an **ADMIN** role is my only discord.\n\nDo **NOT** provide any information on discord. Only use a verified Sythe PM from me for trades.")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        channel.send(imposter);
        member.kick("imposter");
        // switch to ban
    }
    else {

        let join = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor(`Welcome, ${member.displayName}!`)
            .setDescription("to Pink Clay's Infernal & Fire Cape services!\n")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        channel.sendMessage(join);
    }

    let pm = new Discord.RichEmbed()
        .setColor("#762928")
        .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
        .setAuthor("Welcome to Pink Clay's Infernal & Fire Capes")
        .setDescription("Please click the link above to view the Sythe.org thread.\n")
        .addField("Imposters", "Due to an increase in imposters on Discord, **ALWAYS** request a private message from me on Sythe.org\n\n**Pink Clay#2390** with an **ADMIN** role is my only discord.\n")
        .addField("Warning", "Do **NOT** provide any information on discord. Only use a verified Sythe PM from me for trades.")
        .addField("Trading", "Always request my RSN before trades so you can confirm it is me.")
        .addField("Rules", "Please do not spam or advertise, impersonate staff, and stay on topic.\n")
        .addField("Discord", "https://discord.gg/nea8DD is the only official server.")
        .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/1/14/Infernal_cape.png/revision/latest?cb=20170603042039")
        .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
    member.send(pm);
});


bot.on("message", async message => {

    if (message.author.bot) return; // don't reply to bots
    if (message.channel.type === "dm") return; // don't reply to private messages

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return; // don't do anything if it's not a command

    console.log(messageArray);
    console.log(command);
    console.log(args);

    if (command === `${prefix}inferno`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Infernal Cape Information")
            .setDescription("The infernal cape service provides....")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/1/14/Infernal_cape.png/revision/latest?cb=20170603042039")
            .addField("Armor", "Ancestrals... Kodai Wand... SGS.")
            .addField("Inventory", "Twisted bow... 10 brews... ect.")
            // .attachFile("./inventory.jpg")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}payments`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/3/30/Coins_10000.png/revision/latest?cb=20130321223514")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Accepted Payments")
            .setDescription("I accept OSRS GP, BitCoin, and Western Union.")
            .addField("Paypal", "Please purchase OSRS gold off site via paypal as I do not accept it.")
            .addField("Inferno", "It is highly recommended to pay via BTC or other IRL methods instead of GP so there are no in-game trades.")
            .attachFile("./assets/payments.png")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}firecape`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Fire Cape Information")
            .setDescription("The fire cape service provides....")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/5/54/Fire_cape.png/revision/latest?cb=20130629105429")
            .addField("Armor", "Black d'hide... Vambraces...")
            .addField("Inventory", "Toxic Blowpipe... 10 brews... ect.")
            .attachFile("./assets/inventory.jpg")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}about`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Welcome to Pink Clay's Infernal & Fire Capes")
            .setDescription("Please click the link above to view the Sythe.org thread.\n")
            .addField("Imposters", "Due to an increase in imposters on Discord, **ALWAYS** request a private message from me on Sythe.org\n\n**Pink Clay#2390** with an **ADMIN** role is my only discord.\n")
            .addField("Warning", "Do **NOT** provide any information on discord. Only use a verified Sythe PM from me for trades.")
            .addField("Trading", "Always request my RSN before trades so you can confirm it is me.")
            .addField("Rules", "Please do not spam or advertise, impersonate staff, and stay on topic.\n")
            .addField("Discord", "https://discord.gg/nea8DD is the only official server.")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/1/14/Infernal_cape.png/revision/latest?cb=20170603042039")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}imposters`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("About Imposter Blocker")
            .setDescription("Imposter Blocker detects and blocks malicious user attempting to joining.\nDue to an increase in imposters on Discord, **ALWAYS** request a private message from me on Sythe.org\n\n**Pink Clay#2390** with an **ADMIN** role is my only discord.\n\nDo **NOT** provide any information on discord. Only use a verified Sythe PM from me for trades.")
            .addField("Trading", "Always request my RSN before trades so you can confirm it is me.")
            .addField("Rules", "Please do not spam or advertise, impersonate staff, and stay on topic.\n")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}completed`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/pinks-vouch-thread/#post11320813")
            .setAuthor(`Thank you for your purchase, @${args[0]}!`)
            .setDescription("Your order is complete, feel free to log in and please **change your password** immediately for security purposes.\n\nIf you have time to share your feedback with my service I would really appreciate it.")
            .addField("Post a Vouch!", "https://www.sythe.org/threads/pinks-vouch-thread/#post11320813\n")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    if (command === `${prefix}join`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor(`Welcome, ${args[0]}!`)
            .setDescription("to Pink Clay's Infernal & Fire Cape services!\n")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay#2390", "http://www.sythe.org/js/favicon.png");
        message.channel.send(embed);
    }

    // This command removes all messages from all users in the channel, up to 100.
    if (command === `${prefix}clear`) {
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        const fetched = await message.channel.fetchMessages({ count: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }

    if (command === `${prefix}help`) {
        let embed = new Discord.RichEmbed()
            .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Infernal Bot Helper")
            .setDescription("Information about commands.\n")
            .addField("!help", "Display this menu.")
            .addField("!clear {amount}", "Deletes message history.") //done
            .addField("!inferno", "Displays information about the inferno.")
            .addField("!firecape", "Displays information about fight caves.")
            .addField("**TODO** !mains", "Displays information about banned users.")
            .addField("!imposters", "Displays information about banned users.") // done
            .addField("!about", "Display the about message on join.") //done
            .addField("!join {username}", "Posts the welcome message.") // done
            .addField("!payments", "Display the thank you message for the user.") //done
            .addField("!completed {username}", "Display the thank you message for the user.") //done
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Tzrek-jad.png/revision/latest?cb=20170616214946");
        message.channel.send(embed);

        // .addField("**TODO** !zerkers", "Displays information about banned users.")
        // .addField("**TODO** !pures", "Displays information about banned users.")
        // .addField("**TODO** !cape", "Displays information about what capes are in progress.")
    }
});

bot.login(botSettings.token);

// if user says 'much cost price estimate'