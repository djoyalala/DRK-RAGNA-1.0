//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "243898399103";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZGdDlka3VYRkZMRnNxakVmaVNvdE5wTndkR3U4aHJ1NTJYODBGc0ZVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem96N1ZjbHVCRmxUN2cxVnNiTEFvdS9HcUYzdVhPQU1DYUpCU2lwQUwxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRVoyTHZncEUvUi85K245VGNjN01lTStoUmFzYzNSV29uaitmaGZXM0hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwc3N6dUlwaFNMekNJYTBVcHF3TFhZRWZyZXp4WXNHMXFpbk5VRHEvTHhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBZlRKbHhDRWF6dE5KOHlnWFFyOWxlZ3ZGUVJFZk5JbmVXY0RrTTFFMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im11QmxUM2ZudzY0b0liZEJEYjZXMU1peDM1SllQVEhBcG1mdGd5SmVtSFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxiMWN2cDhENXh1L2VHZDZ6TzlNWStMcy9rSkQ1eWt0NDNRTHQwNVRtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicS9mWTAwNWE3VzZxemtpWlJFNzNkSmJwSHNhenB3NTJEd1p1S21oVnBuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im12VS9HdWw1Q2l2QzZpcGhubGZvSWdxYlhqN2FtVElzSXBFcldDRERibkEzSGQzY1Bua3NJVXNodnMwTjFGYi9nSFpMSllVSHpaQldaZjFkaHZ1UER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJYbGl5U3FkTk9NeXJhemRMWVRpNWFFb2p2ZlkrcjM3VTc4bWxXV2hCMnpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNOU1Vyb3NDRUpETGpNRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4K2tpTWJTZCs5OU9BNEJIUHk5Qnl6bEoyMStPVk0vaHM3bTZKN1ZZNFFZPSIsImFjY291bnRTaWduYXR1cmUiOiJNQ1hsbUxWeE1yUE1sSWlhOEVSbVV5eUd5NFdUVFBTaVZFSGFyV0tPUkdTcFdYamR6RG03Q0Nwci9vZFlHSERVeUs5K2NQRms5OStWSjVONFVhdDZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUXJGWHdBMGRGell3TjNBU0hjVDQwZ2RHVmwvTmt6cUNEdEh6Z1hmVFQ0eWlyeWJab2thOXhCNG82V1pHbjlUckNST0NqNE51bDVxUkh1MC9walVyQ3c9PSJ9LCJtZSI6eyJpZCI6IjI0Mzg5ODM5OTEwMzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpFTVNZQk9ZIiwibGlkIjoiMTgwMTUyODIyNjczNTY2OjZAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg5ODM5OTEwMzo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNmcElqRzBuZnZmVGdPQVJ6OHZRY3M1U2R0ZmpsVFA0Yk81dWllMVdPRUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzEzMzg1NSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
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
