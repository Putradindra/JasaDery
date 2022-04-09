let handler = function (m) {
	this.sendContact(m.chat, '6289504575881', 'Owner Null Bot :)', m)
}

handler.customPrefix = ['🍭Owner Null Bot'] 
handler.command = new RegExp

module.exports = handler