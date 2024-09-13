//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "teamsasaki1@yahoo.com";
global.location = "Douala, Africa";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/IdB2EfQiNlKBekQrigN9m9";
global.website = process.env.GURL || "https://www.youtube.com/@SSK-FAMILYCAMPAGNY";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/14da013d2b0b939484527.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242067274660";
global.sudo = process.env.SUDO || "22507118405";
global.owner = process.env.OWNER_NUMBER || "242067274660";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6e28b5b9cc330466b1f05.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://damon-salvatore-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtWQ0MyeFpuazY4cGxPK0ZGT1FCZ3g3aWNKcmNoZnl3bktFdlBtWkhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlAvNHNEQ2tHVm1GQlVvbVhpOVhCU3dZcW8zOEsxc2RRN3YyVXZTazlraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SmpzNFNxL3RDR0JvWWVFbFpVTjBVSmRZc1JrSElkZStrdWt3UGp3VjNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZnUwK2FMLzRidC9sK2JNN083a0NIMWdEeXcxWDUraC9HZ2RYSFNzbHpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOL2ljaVJ5dUZLd1YwZFFwcEhjVUZ4Rk11TEN2YWFMK2tTQ0w3UTZtbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJFTXc2OXBLRm9nRlBKMzVXamRCWTIzQ0ljRDZrNXhUcTFPVDZpcHlvV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZTUSt5enhkTUZhYUhWdlUyaDdOZExrMFJtcHBBMXJFdERQSVNkNjducz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3Y4cyt0Y0tRYXZlU3VnUnZzQ053dzFZd1M5Q1dCQUczdFp5WjVOcVJoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNiS3hkbmdrclRkTXJUS2R4TmJTck1NSDUvb245dEx3WkxXeXRzOEhBc1NuclIwWTFST3VEN3Z6N3VZeWk2Q1gxTlZFZDhGaDZPT1dCY2FJams2RkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJNSlZyb1huTTB0SWdJNzA3aTM2VXczRitvcXcxYlI4WmxsNWxtbk1UeVNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlRDVBN3FNZ1NTLUtPa0s4NXlFYnZnIiwicGhvbmVJZCI6IjdjZjg2NjNhLTYwMzQtNGI0MC04ODRhLWJiY2JkMGI1N2RiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTVpNL01wNmJYeUVpV240UVpJR2pzNExMeFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN29hNWdmRkdtaVhFNDdPcGVSK2txZVZSL2FnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNRQTZaQTVWIiwibWUiOnsiaWQiOiIyNDIwNjkyODM5NjY6NDZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x5SWh1d0JFSWlva2JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFzV1pRZEFoNXEvOWxzWWQ2WUhoNlNWYmdXNnhPZ2tkZ3dyMnpWM0xRaU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IklPVENxakdWZENoR25IeURySkg5cGM4K3ZSTzE2UFJpd2JDS2JNUEVUWXd5cHRxWnc0SmRSSEhIVjZrRlFRalRLZlBjZDR5ek9qTkZ1TTVBL3pnWUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4YWpCRzdsVmwxOUExRDhuZFdCekhPODdmSGZoZnNtV0c1VnNWV2NhLzJLTHViV2ZNVTdsNkVOOGc2VTVCNGlQUEVDQUtzdDRPOEJaV0Y3clNQclhDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2OTI4Mzk2Njo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkYkZtVUhRSWVhdi9aYkdIZW1CNGVrbFc0RnVzVG9KSFlNSzlzMWR5MElqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MjM5NzY1fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF *━➣ 亗𝑆𝐴𝑆𝐴𝐾𝐼 𝐹𝐴𝑀𝐼𝐿𝑌 亗 ━➣* `",
  author: process.env.PACK_AUTHER || "亗𝑆𝐴𝑆𝐴𝐾𝐼 𝐹𝐴𝑀𝐼𝐿𝑌 亗",
  packname: process.env.PACK_NAME || "AཽKཽAཽSཽHཽIཽ SཽAཽSཽAཽKཽIཽ",
  botname: process.env.BOT_NAME || "𝐷𝑎𝑚𝑜𝑛-𝑠𝑎𝑙𝑣𝑎𝑡𝑜𝑟𝑒-𝑀𝐷",
  ownername: process.env.OWNER_NAME || "AཽKཽAཽSཽHཽIཽ SཽAཽSཽAཽKཽIཽ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Damon-Salvatore").toUpperCase(),
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
