let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "⛏️LIST PEKERJAAN⛏️",
                        "description": "\n\n➕Mencari exp,Uang,Dll\n➕Tolong jangan spam!!\n➕Jika Tidak work maka :\n\t\tAnda sedang lelah..\n\n\n_©DimasDev_",
                        "buttonText": "💾MULAI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                     "title": `- [🌳] Menebang Pohon`,
                                        "description": ".nebang",
                                        "rowId": ".tebang"
                                    },{
                                       "title": `- [🛵] Ngojek Orang`,
                                        "description": ".ojek",
                                        "rowId": ".ojek"
                                    },{
                                        "title": "-[⛏️] Menambang",
                                        "description": ".nambang",
                                        "rowId": ".nambang"                                              
                                    },{
                                       "title": `- [🚕] Taxy (Taksi)`,
                                        "description": ".taxy",
                                        "rowId": ".taxy"
                                    },{
                                        "title": `- [🐅] Berburu Hewan`,
                                        "description": ".berburu",
                                        "rowId": ".berburu"
                                    },{
                                      "title": "-[🎣] Mancing Di laut",
                                        "description": ".mancing",
                                        "rowId": ".mancing"                                              
                                    },{
       
                                        "title": "- [🗺️] Ke Hutan",
                                        "description": ".adventure",
                                        "rowId": ".adventure"
                                    },{
                                        "title": `- [🕯️] Ngepet lilin`,
                                        "description": ".ngepet",
                                        "rowId": ".ngepet"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['pekerjaan']
handler.register = true
module.exports = handler