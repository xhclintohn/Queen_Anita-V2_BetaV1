//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ATOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ATOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254735342808";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFYQyt6aTAweXhjSmtNcWpERmFNOXFUc0FVUnAxSEQ4NTlITWVYSk8zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWFyRGtzM0t1cDVSeU1PNFE1L3JZaUdMRmFmY0VmK2s5UkF5WSs0amxSQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1BnUEFEeEUzVmhoZVRwc3ZsYXQ1QllDbkdLYTUvZTFqdk4rZ1NPcW5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWxhbWxxTjJCNDgrUmVnUk9nMEdnaDY5eFFYNXdVZFY2OGM5c2lxR0JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKS3lFaytRMng2T2luTHp5OGdOcEpoUnBYUjBxUmQrNjl5YXQ4YlJSR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpXeGNMSUJkWlhJVlhLTlFXTzBjVk14U29paU9wTExiV0I4VWR1bkZRZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RBZE1pbFBYdjhRY0NxSTJCNlFXSFdDREFxaTV6SjVpZWhDRDl0RkJFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDRXT29wNnpXWUVmQ0ZncTJTRkM1dEhnR1VXcXJIOHZad3dDQllTZmVRST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt5RGhJcE1LeHY0UjY2bjM0WG5FNW9reks5VFNXSW9kL0U5UXUzb2loRVZwQnV6dVM4eUdOOHpGMHNCSm0rWFkwU0VRMXNpcmZmelp2QklXWnFBbUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJ0RHEyNUZQVGVKcVJMRzM4OXJpVjZacHZ4Ry9aVWdKZkpUVDNYaXBoR3pjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNjA2MDE3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRkFBM0EyMzY0MzRBRkY2NURDMDgzMkM0MEI3RDY0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0NTc5ODMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTYwNjAxNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjlBOTVEQzU2NEQ2M0NFMzExRDgyMEU4NzBFQ0ZGOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDU3OTg1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicWFQMnZsMVdSTVc1ajJLM1A2ZWdzZyIsInBob25lSWQiOiI4OGVmNzE5YS0xMjQwLTQzMDMtYjAwMC0xNWNmMWU5ODI2OTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXpwL1VuUTNzZWFWZFdKNGJuS0FLYXV0VEQ4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVJTGZoSCsrc2Q4REhWbkxqTTh5SVgwcnZGRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFRUgyNTZHRCIsIm1lIjp7ImlkIjoiMjU0NzE2MDYwMTc2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhhZGR5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKU0F4NnNFRU5ML3E3WUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUaFNOQzdJYzh2Z3lhOXZGOHNlT3FUSjhSb3dpZXpSUkJ3TTMvZ3MxMEdZPSIsImFjY291bnRTaWduYXR1cmUiOiJtNDNJOVI0akgwNkpZc2NrQ05PZ3hjcHBSWTdaeFM0dTlvbWQxaW9sWmpPd1FJeWxpdnBtQW1pWEJaOVZQWFZrWlAwYXZ4Y3hCM3FLQWpTalE5WUVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0diSG8rZXFHYVlBMDhaa09GRUtxc2k2MGlwZUFLUnhpU3hDZ3RnclRrQXJBTzdjRlRwQWhDL254RVB5WXhFMVM0aXA4SWtxNTBYc1pPM0JTNE41QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTYwNjAxNzY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNFVqUXV5SFBMNE1tdmJ4ZkxIanFreWZFYU1JbnMwVVFjRE4vNExOZEJtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0NTc5ODA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxQNyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "xhclinton",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
