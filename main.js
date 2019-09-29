const { Client } = require("discord.js");
const client = new Client({disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.reply("Pong!");
  if (msg.content === "everyone") 
   msg.channel.send("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone") 
   msg.channel.send ("@everyone (noteveryone), salut à tous!");
});

client.login("NjI1MzExOTA1NTgxMzY3Mjk2.XZB9hw.qqBy7F3cR5M-_L6TLFJuPsD8xtw");
