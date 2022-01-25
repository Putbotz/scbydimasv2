
let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan Text Untuk Bio Baru Bot`
     await conn.setStatus(text)
       
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['bioo']
handler.tags = ['owner']
handler.command = /^(bioo)$/i
handler.owner = true

module.exports = handler
