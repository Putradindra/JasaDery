let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `๐ Tidak ada absen berlangsung!`, wm , 'Mulai', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `โโช ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
*๐ Tanggal: ${date}*
${conn.absen[id][2]}
โญโโโ[ *daftar absen* ]
โโง *Total:* ${absen.length} โง
${list}
โฐโโโโยทยทยทโโโโโโ`.trim()
    await conn.send2Button(m.chat, caption, wm, 'Absen', `${usedPrefix}absen`, 'Hapus', `${usedPrefix}hapusabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i

module.exports = handler

let wm = global.botwm