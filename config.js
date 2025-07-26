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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "NULL";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_59_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSWFqNDhMb2IyMzV5WHZXbXNhTkdITU1DaFlEcTVONWtGWW1qSk1QZEVGOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5NUY4QjE2RjMzMjY5MDUxMzk1QjEwNjU5NUJCREY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MzU1Mjc1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzVERDMzNkJFOTdDN0E3RDcxMkJCRDkyMzQwRDZBQUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUzNTUyNzU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OEM3MkNDODI4M0NFNzFBOEZCQjVFQzBCMEEwMTM1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTM1NTI3NjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzI4WGJjR2ZTZEd1VGNRRl9Kb1UxUVwiLFxuICBcInBob25lSWRcIjogXCJhZDRkYjgyZC02MzZhLTQxZWMtOWJlMi1hODEzOGFlNmVlZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMjAzLFxuICAgICAgNDQsXG4gICAgICAxOCxcbiAgICAgIDg4LFxuICAgICAgMTE2LFxuICAgICAgNjIsXG4gICAgICA5NCxcbiAgICAgIDIzNyxcbiAgICAgIDQ1LFxuICAgICAgMjM1LFxuICAgICAgMjUzLFxuICAgICAgMTQ0LFxuICAgICAgMTkxLFxuICAgICAgMTEwLFxuICAgICAgMjQ3LFxuICAgICAgMTkwLFxuICAgICAgMTUsXG4gICAgICAxMzYsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDIzLFxuICAgICAgMTQzLFxuICAgICAgMTI2LFxuICAgICAgNjMsXG4gICAgICAyNDUsXG4gICAgICAyMjcsXG4gICAgICA1OCxcbiAgICAgIDU3LFxuICAgICAgMjQzLFxuICAgICAgMTY2LFxuICAgICAgOTYsXG4gICAgICAxODcsXG4gICAgICAyMzMsXG4gICAgICAxMjgsXG4gICAgICAxODcsXG4gICAgICAxNDAsXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWEwrY1VHRVBPdWxNUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNZSEVvb3VRZGY4SzJPcmlOZ2dUT0ZDL1RiZk1nYTQyREtRRmhWMyt5VlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHYrQjZWMVYxVm1pYy9tMjhvTGE1UTd0MndZV08xemdEd1NrTWdkNnFZd3RhWDYzV0c5cUxxT3REZ2xLTWUyWEZEN1lyMm5iWnQrYTdKZEZtZ3BFQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYm9lVmxvYlNHRUlhY09MZHlBZWpQSFh5T3JiUmxqdzhVMlQ0SGJJTVhyeC9SU3dyNmh2dWExSnh5N0JndzBTODhCMWIwYzNIa2lLaUpKS0pHbnRyQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzEwMDMwNzE6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDUyNTY5MTg3MTI1Nzo1MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIQUtFRU1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTAwMzA3MTo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTM1NTI3NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEbWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURtYy5qc29uIjogIntcImtleURhdGFcIjpcImE2Z1hOQ0FOTHN5VWhZNVFocUhGL05ZYXFnTGg3MjNJS1U5cFhVR1ZrNzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1NzMwODMwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUzNTUyNzU3OTE1XCJ9Igp9"  // PUT your SESSION_ID 


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
