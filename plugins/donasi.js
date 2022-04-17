let handler =  m => m.reply(` ❰𝗞𝗔𝗠𝗜𝗦 𝗕𝗢𝗧 𝗚𝗥𝗢𝗨𝗣❱
https://chat.whatsapp.com/Gyf1AAxhBA1CW3s3KTRs7F
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
