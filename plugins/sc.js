let handler  = async (m, { conn, usedPrefix: _p }) => {
	let fetch = require('node-fetch')
    let fs = require('fs')
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Script Null Bot๐๏ธ', 
    orderTitle: `โฎMenu โธ`,
    thumbnail: await (await fetch(fla + 'Script')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Source+code'
let info = `โช ๐ฎ *SCRIPT BOT*
โ *Script :* 
โ โฐ Beli Aja kak Murah Koq ( Wa.me/6289504575881 )
โ *RestApi :* 
โ    https://NullBot.herokuapp.com
โฐโโโโโโโโโโโโโโโโโโโโโโโ
๐ *N o t e :* 
โข Jangan Eksploitasi Bot!
โข Jangan Lupa kasih star & kasih credit
`.trim()
await conn.send2Button(m.chat, info, `${botol}`, 'โฎโฐ INFO', '.info', 'OWNER', '.owner', ftrol)
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc|script)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm
