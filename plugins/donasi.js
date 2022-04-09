let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6295410650067
│┝‷✧ *Dana:* 62895410650067
│┝‷✧ *Linkaja:* 62895410650067
│┝‷✧ *Gopay:* 62895410650067
│┝‷✧ *Ovo:* 62895410650067
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6289504575881?text=kak+putra+ganteng+banget+💗
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
