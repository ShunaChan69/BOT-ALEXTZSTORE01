import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*MAU CARI SC BOT NYA? SC PRIVATE KALAU MAU*\nSilahkan BELI HUBUNGI OWNER KAMI ,Terimakasih`
conn.sendHydrated(m.chat, str, wm, pepe, 'http://wa.me//6283167581315', 'WA OWNER', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = ['sc']

export default handler