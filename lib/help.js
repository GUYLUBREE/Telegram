const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`./config.json`))

exports.start = async(lol, name) => {
    text = `[ KahfzXy BOT TELEGRAM]
    
Hello ${name}!
Nama : KahfzXy Bot Telegram
Language : JavaScript
Engine : Node Js
Owner : [Klik here](https://t.me/xzyaxxyu)
Type : /help`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(lol, name, user_id) => {
    text = `Hello ${name}!!\nIm KahfzXy Bot!!\n👇Please Choose One👇`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Info Bot 📛', callback_data: 'inpo-' + user_id },
                ],
                [
                    { text: 'Tulis Buku 📒', callback_data: 'nulis-' + user_id },
                    { text: 'Tulis Folio 📄', callback_data: 'folio-' + user_id },
                ],
                [
                    { text: 'Random Cewe', callback_data: 'awewe-' + user_id },
                ],
                [
                    { text: 'Downloader ⬇️', callback_data: 'donglod-' + user_id },
                    { text: 'Text Pro 📸', callback_data: 'textpro-' + user_id },
                 ],
                 [
                    { text: 'Random Text 💬', callback_data: 'random-' + user_id },
                    { text: 'Nsfw ⚠️', callback_data: 'nsfw-' + user_id },
                ],
            ]
        }
    }
    try {
        await lol.editMessageText(text, options)
    } catch {
        await lol.reply(text, options)
    }
}

exports.nulis = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ BUKU ]
❏ ${prefix}nuliskanan <Text>
❏ ${prefix}nuliskiri <Text>`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.nsfw = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ NSFW ]
❏ ${prefix}hentai
❏ ${prefix}ass
❏ ${prefix}blowjob
❏ ${prefix}cum
❏ ${prefix}ero
❏ ${prefix}femdom
❏ ${prefix}cuckold
❏ ${prefix}foot
❏ ${prefix}gangbang
❏ ${prefix}glasses
❏ ${prefix}nsfwneko

NOTE: HARAM BRODYY`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.donglod = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ DOWNLOADER ]
❏ ${prefix}play <Judul Lagu>
❏ ${prefix}ytsearch <Search>
❏ ${prefix}ytmp3 <Link Yt>
❏ ${prefix}ytmp4 <Link Yt>
❏ ${prefix}tiktok <Link Tiktok>
❏ ${prefix}tiktokaudio <Link Tiktok>
❏ ${prefix}igdl <Link Ig>`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.textpro = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ TEXT PRO ]
❏ ${prefix}glitch Text
❏ ${prefix}glitchtt Text Text
❏ ${prefix}pornhub Text Text
❏ ${prefix}toxic Text
❏ ${prefix}neon Text
❏ ${prefix}black Text
❏ ${prefix}circuit Text
❏ ${prefix}fiction Text
❏ ${prefix}bp Text
❏ ${prefix}neonlight Text
❏ ${prefix}matrix Text
❏ ${prefix}neonpl Text
❏ ${prefix}wolflogo Text Text
❏ ${prefix}gameover Text Text
❏ ${prefix}lolimaker Text
❏ ${prefix}grafity Text Text
❏ ${prefix}grafity2 Text Text`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.donasi = async(lol, user_id) => {
    prefix = config.prefix
    text = `◪ DONASI
  │
  ├─ ❏ GOPAY
  ├─ ❏ 083127014833
  ├─ ❏ OVO
  ├─ ❏ 083127014833
  ├─ ❏ PULSA
  ├─ ❏ 081319944917
  ├─ ❏ PULSA2
  ├─ ❏ 083127014833
  ├─ ❏ INSTAGRAM
  └─ ❏ https://www.instagram.com/Kahfz_13`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.inpo = async(lol, user_id) => {
    prefix = config.prefix
    text = `       𝗜𝗡𝗙𝗢 𝗕𝗢𝗧


𝗡𝗮𝗺𝗮 𝗕𝗼𝘁 : KahfzXyyBot
𝗢𝘄𝗻𝗲𝗿 : @xzyaxxyu
𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲 : 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁
𝗘𝗻𝗴𝗶𝗻𝗲 : 𝗡𝗼𝗱𝗲 𝗝𝘀

𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
- 𝘈𝘮𝘦𝘭 - 𝘊𝘢𝘯𝘻 (Amel)
- 𝘏𝘢𝘳𝘥𝘪𝘢𝘯𝘵𝘰 (Anto)
- KahfzXy (Kahfi)
- 𝘈𝘳𝘢𝘴𝘺𝘢 (Arsya)
- 𝘓𝘰𝘭 ~ 𝘏𝘶𝘮𝘢𝘯 (LolHuman.xzy)
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.folio = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ FOLIO ]
❏ ${prefix}foliokanan Teks
❏ ${prefix}foliokiri Teks`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.random = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ RANDOM ]
❏ ${prefix}quotes
❏ ${prefix}quotesislami
❏ ${prefix}loli
❏ ${prefix}randomwaifu
❏ ${prefix}husbu
❏ ${prefix}randomshota
❏ ${prefix}randomkanna
❏ ${prefix}fakta
❏ ${prefix}truth
❏ ${prefix}dare
❏ ${prefix}bijak
❏ ${prefix}ssweb Link
❏ ${prefix}darkjokes`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.awewe = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ PILIH TIPE CEWE BERIKUT ]
❏ ${prefix}china
❏ ${prefix}hijab
❏ ${prefix}indon
❏ ${prefix}japan
❏ ${prefix}korea
❏ ${prefix}malay`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.messageError = async(lol) => {
    await lol.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}