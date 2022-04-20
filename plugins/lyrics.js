import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
❤️𝗟𝗬𝗥𝗜𝗖𝗦 *${result.title}*
❤️𝗔𝗨𝗧𝗛𝗢𝗥 ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['lyrics'].map(v => v + '')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler
