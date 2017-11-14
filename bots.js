const botSettings = require("./settings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
    console.log(`${bot.user.username} is geared up!`);

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    }
    catch (e) {
        console.log(e.stack);
    }
});

bot.on('guildMemberAdd', member => {
   member.send("Welcome to the server!");
});


bot.on("message", async message => {

    if (message.author.bot) return; // don't reply to bots
    if (message.channel.type === "dm") return; // don't reply to private messages

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    console.log(messageArray);
    console.log(command);
    console.log(args);

    if (!command.startsWith(prefix)) return;

    if (command === `${prefix}inferno`) {
        let embed = new Discord.RichEmbed()
            // .setTitle("Pink Clay's Firecape Service")
                        .setColor("#762928")
            .setURL("https://www.sythe.org/threads/1k-vouches-teamviewer-infernal-cape-service-pures-zerk-mains/")
            .setAuthor("Infernal Cape Information")
            .setDescription("The infernal cape service provides....")
            .setThumbnail("https://vignette.wikia.nocookie.net/2007scape/images/1/14/Infernal_cape.png/revision/latest?cb=20170603042039")
            .addField("Armor", "Ancestrals... Kodai Wand... SGS.")
            .addField("Inventory", "Twisted bow... 10 brews... ect.")
            // .attachFile("./inventory.jpg")
            .setFooter("Request a PM on Sythe before trades. - Pink Clay #2390", "http://www.sythe.org/js/favicon.png")
            message.channel.send(embed);
    }


});

bot.login(botSettings.token);



// if user says 'much cost price estimate'

// console.log(botSettings.prefix);
// console.log(botSettings.token);
