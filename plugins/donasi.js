let handler =  m => m.reply(` ❰𝗔𝗟𝗧𝗢𝗡 𝗕𝗢𝗧 𝗚𝗥𝗢𝗨𝗣❱
https://chat.whatsapp.com/JcjjnS7oSbQ3FPCCNJT44M
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
