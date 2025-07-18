const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Pakistan"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Pakistan";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "HAKEEM" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923370416077";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_48_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSaS8zaEpaRnhQb3lzdXlvYll3NW9la0xIbWVJWll1TGlQT0Q5QUpTRlRVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkNDOEZCNERBRjdCNThGQURFODUwMUNGQjdEMzhGRjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUyODM1NzA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRTAwRkU2NEVBNEU0MzI4Q0JENjZFMEFFRUFCNzRDOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTI4MzU3MDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4MjM0RjRBRURDNjE2RjVCODhDNjkzNkRCOTM1REMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MjgzNTcxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTZXdURUxoVFRGQ0NlUzh3M1pJLUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjYTcyMjJkLTcwMTctNGEwMy1iZGQ5LWE1OTUzMDc4MzZjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDIwMyxcbiAgICAgIDM1LFxuICAgICAgMTU4LFxuICAgICAgNTUsXG4gICAgICAyMzYsXG4gICAgICAxMjEsXG4gICAgICA3MCxcbiAgICAgIDE5MixcbiAgICAgIDYzLFxuICAgICAgNjgsXG4gICAgICAyNDksXG4gICAgICAxOTEsXG4gICAgICAxNTgsXG4gICAgICAyMDgsXG4gICAgICAxNjEsXG4gICAgICAxMTQsXG4gICAgICAxNzUsXG4gICAgICAyMDksXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE3NixcbiAgICAgIDIwOSxcbiAgICAgIDI3LFxuICAgICAgMTcyLFxuICAgICAgMTAxLFxuICAgICAgOCxcbiAgICAgIDI0LFxuICAgICAgMTcxLFxuICAgICAgMTk4LFxuICAgICAgNzAsXG4gICAgICA5NCxcbiAgICAgIDE3MixcbiAgICAgIDc3LFxuICAgICAgNDgsXG4gICAgICAxNTQsXG4gICAgICA2NCxcbiAgICAgIDczLFxuICAgICAgMTcwLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMeVd5dkFDRVBqTTZNTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5GWERJV0VYQ2JuUU5aSCtZNUxweXN2K0NzTFl3a0tiMXNKS1dKTkFwM009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1BpTENJT3VYa1hXWjdqWjR2dTE0aVM1anRCaUdlOS9ITTBIRmExRjd2cnQySGNIM1JwRnI3Ty9WUmVWRnh4eERSd3Rnc2VEcU4vTTByRXNTSDdmREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmtOeFpsUXJnb2tHRUdzZlF1OUowMlQ1SHJydjFMdzNFc3RKeUNwaFZTYUZDR0JVdE5IcGcwUVgxSDZnRTFweGZuT3FxaExscVBLNGlLZ0FFNUpialE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzEwMDMwNzE6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJkZW1vblwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjQ5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxMDAzMDcxOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MjgzNTcwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY0QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjRBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFMrMWpkNm9iUVJreFRqL1BrM1NtalhrMEE5NS9TVVFCajg2c3d5THpLST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzI5NjcyMjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MjgzNTcwODExMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "HAKEEM",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
