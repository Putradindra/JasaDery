const { igdl } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
m.reply(wait)
  igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    //await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
await conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), kasihcaption, m, true, { contextInfo: { forwardingScore: 999, isForwarded: true }})

    }
  })

}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram)$/i

handler.limit = true

module.exports = handlerlet handler = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://www.instagram.com/xxx/xxxx/`
  let res = await igdl(args[0])
  if (!res.length) throw 'Not found!'
  for (let ress of res) {
    let caption = ` 
  *💻 Url:* ${args[0]}
  *🎰 Link:* ${ress.result}
  `.trim()
    conn.sendFile(m.chat, ress.result, 'ig.mp4', caption, m)
  }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram)$/i

handler.limit = true
