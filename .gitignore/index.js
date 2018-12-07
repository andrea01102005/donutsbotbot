const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot allumé ! ${client.user.tag}!`);
});

client.on('message', message => { 
  if(message.content === "=ping"){
      var enligne = new Discord.RichEmbed()
              .addField("Pong:ping_pong: ! Joli coup !","*=ping pour rejouer.*")
              .setColor("#FE2EF7")
              message.channel.send(enligne)
      }
})
  

client.login('NTE4ODczMTEzNDc2NDY0NjU4.Duc16A.kIFxZBuwMG6E1ymeJDSDet0KPlg');

client.on('ready', () => {
  client.user.setActivity(`me faire manger a l'=aide | ${client.guilds.size} serveurs et ${client.users.size} utlisateurs !! `)
  console.log('I am ready!');
});


client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("=" + "say"))  {
    if (message.channel.type === "dm") return; 
         message.delete()
    message.channel.send(args.join(" "))
 
     }


 
});



// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTE4ODczMTEzNDc2NDY0NjU4.Duc16A.kIFxZBuwMG6E1ymeJDSDet0KPlg');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('=kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Pour quels raisons voulez-vous le kick ?').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`${user.tag} a été kick !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Permissions non acordées');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Mentionne la personne que tu veux kick!');
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTE4ODczMTEzNDc2NDY0NjU4.Duc16A.kIFxZBuwMG6E1ymeJDSDet0KPlg');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('=ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'Pour quelle raison ?',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`${user.tag} a été ban !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('Permissions non accordées');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Erreur');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('Mentionne la personne que tu veux kick!');
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTE4ODczMTEzNDc2NDY0NjU4.Duc16A.kIFxZBuwMG6E1ymeJDSDet0KPlg');

client.on('message', message => {
  if (message.content === '=support'){
       var enligne = new Discord.RichEmbed()
               .setAuthor('------------------------------------------SUPPORT------------------------------------------')
               .addField(`__Invite le bot__ :`,` https://discordapp.com/oauth2/authorize?client_id=518873113476464658&scope=bot&permissions=2146958847`)
               .addField(`__Serveur Support__ :`,`https://discord.gg/JsPE26F`)
               .setColor("#FE2EF7")
               message.channel.send(enligne)
      }
})

client.on('message', message => { 
  if(message.content === "=aide"){
      var enligne = new Discord.RichEmbed()
              .setAuthor(`Voici mes commandes 👌`)
              .addField(":video_game: __FUN__ :video_game:","=aide | =ping | =say | =avatar ")
              .addField(":cop: __MODERATION__ :cop:","=ban | =kick")
              .addField(":white_check_mark: __UTILE__ :white_check_mark:" , "=donuts | =support | =statsbot")
              .setColor("#FE2EF7")
              message.channel.send(enligne)
      }
})

client.on('guildMemberAdd', member => {

  console.log(`${member}, "a rejoin" + ${member.guild.name}`)

  const role = member.guild.roles.find('🍩Donutsmembre🍩')
  member.addRole(role)

});

client.on('message', message => { 
  if(message.content === "=statsbot"){
      var enligne = new Discord.RichEmbed()
              .setAuthor(`---------------------------------------Stats du Bot---------------------------------------`)
              .addField(`__Nombre de serveurs__`,`Le bot est sur ${client.guilds.size} serveurs.`)
              .addField(`__Nombre d'utilisateurs__`,`Le bot est utilisé par ${client.users.size} utilisateurs.`)
              .setColor("#FE2EF7")
              message.channel.send(enligne)
      }
})


client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '=avatar') {
      var enligne = new Discord.RichEmbed()
         message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === '=donuts') {
    var enligne = new Discord.RichEmbed()
              .setAuthor("-------------------------------------------DONUTS-------------------------------------------")
              .addField("__Presentation__","Le DonutsBot est un bot fun et drole essentiellement d'animation pour vos serveurs et vos amis avec qui vous voulez partagez cette animation.")
              .addField("__Commandes__","Fun et drole en voyant son logo et son pseudo, le bot cache pourtant beaucoup d'autres critères de fun et jeux, amusez vous a voir vos avatars ou a jouer avec lui au ping-pong ou meme faire un bingo !")
              .addField("__Moderation__","Un serveur animé n'est rien sans un peu de moderation, le bot possede des classiques comme le =ban ou =kick et egalement le =mute et =clear vos serveurs sont animés et protégés !")
              .addField("__Serveur Support__","Un lieu de convivialité et de rencontre, le serveur support vous accueil pour toutes infos ou question, soyez notifiez des dernieres nouvelles et commandes sorties ! Avec un staff compétant et a votre ecoute, nul doute que ce serveur vous sera un outil magique !")
              .addField("__L'alliance__","Le bot est le complement du Protectorbot que vous trouverez dans le serveur support, un bot a 90% administratif vos serveurs seront bien protégés contre des attaques. Pour plus d'infos rendez-vous dans le serveur support.")
              .addField("__Createurs__", "@Iniesta G#4228 et @🀄🎅ALPHA🎅🀄#7570 ")
              .setColor("#FE2EF7")
              message.channel.send(enligne)
      }
})
