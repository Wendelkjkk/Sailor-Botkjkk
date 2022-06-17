/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const crypto = require('crypto')
const { color, bgcolor } = require('./lib/color')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const riy = require('xfarr-api')
const sai = "Sailor-MD"
const _registro = JSON.parse(fs.readFileSync('./database/datauser/user.json')); //DADOS DAS PESSOAS REGISTRADAS 
let _limit = JSON.parse(fs.readFileSync('./database/datauser/limit.json'));
let _vidaNe = JSON.parse(fs.readFileSync('./database/datauser/vida.json'));
let _coins = JSON.parse(fs.readFileSync('./database/datauser/carteira.json'));
let _RPG = JSON.parse(fs.readFileSync('./database/datauser/inventario.json'));
let _level = JSON.parse(fs.readFileSync('./database/datauser/leveluser.json'));
let cassino = JSON.parse(fs.readFileSync('./database/cassino.json'))

let vote = db.data.others.vote = []
let prefix = global.prefix

//DataUser
let { addInventoriVida, ChecarVida, addVida, TirarVida, getVida } = require('./database/vida.js');
let { addCarteira, getNameCoins, addCoins, ChecarCart, confirmPag } = require('./database/coins.js');
let { addInventoriLimit, checarlimit, addLimit, tirarLimit, getLimit } = require('./database/limit.js');
let { checkRpg, addInventario, addFerro, TirarFerro, getFerro, addEmd, TirarEmd, getEmd, addDm, TirarDm, getDm, addOuro, TirarOuro, getOuro, addFish, TirarFish, getFish, addPotion, TirarPotion, getPotion }= require("./database/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./database/lvlfunction");

/********** FUCTION REGISTRO **********/
const getRegisteredRandomId = () => {
return _registro[Math.floor(Math.random() * _registro.length)].id
}
const addRegisteredUser = (userid, sender, idade, horário, serials) => {
const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
_registro.push(obj)
fs.writeFileSync('./database/datauser/user.json', JSON.stringify(_registro, null, 2))
}
const sayoseri = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const checaregistro = (sender) => {
let status = false
Object.keys(_registro).forEach((i) => {
 if (_registro[i].id === sender) {
status = true
}
})
return status
}

module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ?m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        selectedButton = (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        corpo = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
        global.prefix
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "sem nome"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isRegistrar = checaregistro(m.sender)
        const isRpg = checkRpg(m.sender)
        const isVida = ChecarVida(m.sender)
        const isPocao = getPotion(m.sender)
        const isVivo = getVida(m.sender)
        const isCart = ChecarCart(m.sender)
        const isLimit = getLimit(m.sender)
        const isInventoryLimit = checarlimit(m.sender)
		// Selo verificado, Peguei da base do black
        const verificado = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "558287515844@g.us" }, "message": {orderMessage: {itemCount: 15,status: 4, thumbnail: fs.readFileSync(`./lib/image/chika.jpg`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: '0@s.whatsapp.net'}}}
        // Reply
        const reply = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `aguarde um pouco🤤 ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${ig}`}}}, { quoted: m })
        }
        // Reply 2
        const replay = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${sai} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
         const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss DD/MM')
        	
          try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let user = global.db.data.users[m.sender]
 if (typeof user !== 'object') global.db.data.users[m.sender] = {}
 if (user) {
 
 } else global.db.data.users[m.sender] = {
 
 }
    
 let chats = global.db.data.chats[m.chat]
 if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
 if (chats) {
 if (!('antilink' in chats)) chats.antilink = false
 } else global.db.data.chats[m.chat] = {
 antilink: false,
 }
 
if (selectedButton == `pv`) {
let testoderg = `teste kkk`
let rgrg = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
chika.sendButtonText(m.sender, rgrg, testoderg, sai, m)
}

if (budy.includes(`restart`)) {
if (!isCreator) throw mess.owner
m.reply(mess.wait)
exec(`node main`)
console.log(chalk.redBright(`REINICIANDO BOT.. by: ウェンデル`))
m.reply('_Reiniciando..._')
}

if (budy.includes(`Registrar`)) {
if (console.log == "marker was not found")
m.reply('ocorreu um erro\n\nTente novamente. ')
if (isRegistrar) return  m.reply(`ola ${pushname} Você já está registrado`)
if (!q.includes('/')) return  m.reply(` Formato errado coloque assim:\n\n*login ${pushname}/15*`)
const nome = q.substring(0, q.indexOf('/') - 0)
const idade = q.substring(q.lastIndexOf('/') + 1)
const idseri = sayoseri(10)
if(isNaN(idade)) return await m.reply('A idade precisa ser um número!!')
if (nome.length >= 15) return m.reply(`seu nome e muito grande!!!`)
if (idade > 40) return m.reply(`Precisa ter no maximo 40 anos`)
if (idade < 13) return m.reply(`Precisa ter no mínimo 13 anos`)
try {
var ppimg = await client.getProfilePicture(`${m.sender.split('@')[0]}@c.us`)
 } catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
buff = await getBuffer(ppimg)
const kentod = 
`
╭─「 *DADOS DE REGISTRO* 」
│
│*Registro bem-sucedido com*
│ID: ${idseri}
│horário ${time}
│Nome: ${nome}
│Idade: ${idade}
│Número: wa.me/${m.sender.split('@')[0]}
│
│Obrigado por se registrar
│Para usar o bot digite /menu
│Total de usuários registrados: ${_registro.length}
╰───────────────────
`
let buttons = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
veri = m.sender
if (m.isGroup) {
addRegisteredUser(m.sender, nome, idade, time, idseri)
await chika.sendButtonText(m.sender, buttons, kentod, sai, m)
chika.sendText(m.chat, `Registrado com sucesso, Mandei os dados no seu pv 😃`)
//await chika.sendImage(from, buff, kentod, m)
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'), 'em', color(sender || groupName))
} else {
addRegisteredUser(m.sender, nome, idade, time, idseri)
await chika.sendButtonText(m.sender, buttons, kentod, sai, m)
chika.sendText(m.chat, `Registrado com sucesso, Mandei os dados no seu pv 😃`)
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'))}  
}

	//function rank 
  const levelRole = getLevelingLevel(m.sender)
 var role = 'bronze'
 if (levelRole <= 3) {
   	role = 'Cobre'
 } else if (levelRole <= 5) {
   	role = 'Ferro'
 } else if (levelRole <= 7) {
   	role = 'Prata'
 } else if (levelRole <= 10) {
   	role = 'Ouro'
 } else if (levelRole <= 12) {
   	role = 'Platina'
 } else if (levelRole <= 15) {
   	role = 'Mithril'
 } else if (levelRole <= 18) {
    role = 'Orichalcum'
 } else if (levelRole <= 25) {
    role = 'Adamantite'
 }

  //function leveling
 if (m.isGroup && isRpg) {
 const currentLevel = getLevelingLevel(m.sender)
 const checkId = getLevelingId(m.sender)
 try {
   if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
   const amountXp = Math.floor(Math.random() * 10) + 100
   const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
   var getLevel = getLevelingLevel(m.sender)
   addLevelingXp(m.sender, amountXp)
   if (requiredXp <= getLevelingXp(m.sender)) {
   addLevelingLevel(m.sender, 1)   
   var lvlup = `╭───「 Level Up 」
│
├ • Nome : ${pushname}
├ • Rank : ${role}
├ • Xp : ${getLevelingXp(m.sender)}
├ • Level : ${getLevelingLevel(m.sender)}
│
╰───「 Parabéns 」`
		   let buttons10 = [{ buttonId: `null`, buttonText: { displayText: 'Agr pai ta forte😎' }, type: 1 }]
          chika.sendButtonText(m.chat, buttons10, lvlup, sai, verificado)

     }
 } catch (err) {
     console.error(err)
   }
} 
				
	    let setting = global.db.data.settings[botNumber]
 if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
	    } else global.db.data.settings[botNumber] = {
		status: 0,
	    }
	    
        } catch (err) {
 console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
 if (!m.key.fromMe && !isCreator) return
        }
        

        // Push Message To Console && Auto Read
        if (m.message) {
 chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
 console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Para'), chalk.green(m.isGroup ? pushname : 'Chat Privado', m.chat))
        }
        	
	// Time tempo
const tempo = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}
	
//JOGO DO MA
if(!m.isGroup && fs.existsSync(`./database/anagrama-${from}.json`)){
console.log(corpo)
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/anagrama-${from}.json`))
if(corpo.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && corpo.toUpperCase() != dataAnagrama.original) return m.reply('está perto')
if(corpo.toUpperCase() == dataAnagrama.original) { chika.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/anagrama-${from}.json`)		
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou 6 em *xp* e 30 em *dinhero*`
m.reply(recompensa)
setTimeout(async() => {
fs.writeFileSync(`./database/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/anagrama-${from}.json`))
chicka.sendMessage(from, `
╭━❒ 𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔 🦋
│◦➛𝗗𝗲𝘀𝗰𝘂𝗯𝗿𝗮 𝗮 𝗽𝗮𝗹𝗮𝘃𝗿𝗮
│◦➛𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔: ${dataAnagrama2.embaralhada}
│◦➛𝗗𝗜𝗖𝗔: ${dataAnagrama2.dica}
╰━━•ೋೋ•━━
`, MessageType.text) 
}, 5000)
}}

let palavrasANA = [
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},

{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'SACOLE',
embaralhada: 'ESCLOA',
dica: 'NOME'
},
{
original: 'MARIA',
embaralhada: 'MRIAA',
dica: 'NOME'
},
{
original: 'PARALELEPÍPEDO',
embaralhada: 'dolepilepapera',
dica: 'forma geometrica'
},
{
original: 'BRASIL',
embaralhada: 'LBARSI',
dica: 'PAÍS'
},
{
original: 'GIRAFA',
embaralhada: 'FRAGAI',
dica: 'ANIMAL'
},
{
original: 'ELEFANTE',
embaralhada: 'FATELEEN',
dica: 'ANIMAL'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'CORONEL',
embaralhada: 'CR DOAO',
dica: 'MEU CRIADOR'
},
{
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]

	  // Anti Link
 if (db.data.chats[m.chat].antilink) {
 if (budy.match(`chat.whatsapp.com`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
       
 if (db.data.chats[m.chat].antilink) {
 if (budy.match(`https:`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
 
 if (db.data.chats[m.chat].antilink) {
 if (budy.match(`http:`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
 
 if (budy.includes(`wendel lindo`)) {
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
}

	if (budy.length > 3500) {
if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
m.reply('TRAVA MN? 🤨')
await tempo(5000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await tempo(3000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await tempo(3000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await tempo(5000)
m.reply(`「 *TRAVA DETECTADA* 」\n\nCalma fml um fdp mandou trava mas ja removi ele 😎🙌\n\n Ja mandei destrava tbm, eu sei, eu sei.. eu sou rapido 😏`)
}


      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

 // Respon Cmd with media
 if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
 let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
 let { text, mentionedJid } = hash
 let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: chika.user.id,
 quoted: m.quoted && m.quoted.fakeObj
 })
 messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
 messages.key.id = m.key.id
 messages.pushName = m.pushName
 if (m.isGroup) messages.participant = m.sender
 let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
 }
 chika.ev.emit('messages.upsert', msg)
 }
	  
 //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?desistir|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'O jogo terminou',
	    '-2': 'Inválido',
	    '-1': 'Posição inválida',
	    0: 'Posição inválida',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `ID Da Sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Venceu🥳🥳!` : isTie ? `Fim de jogo 😥` : `É sua vez ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

digite *desistir* para render-se e admitir a derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|aceitar|gas|oke?|rejeitar|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rejeitar|gamma|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejeitou o desafio, o desafio foi cancelado 😔`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Desafio foi enviado para o chat

@${roof.p.split`@`[0]} e 
@${roof.p2.split`@`[0]}

Por favor, escolha uma jogada no respectivo chat"
=> https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Por favor selecione \n\nPedra🗿\nPapel📄\nTesouras✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Por favor selecione \n\nPedra🗿\nPapel📄\nTesouras✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Ambos os jogadores não querem jogar,\ndesafio cancelado`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} nao escolheu uma jogada, fim de jogo`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tesoura/i
	    let b = /pedra/i
	    let k = /papel/i
	    let reg = /^(tesoura|pedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Você escolheu ${m.text} ${!roof.pilih ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Resultados do desafio*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Venceu🥳 \n` : ` Perdeu😥 \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Venceu🥳 \n` : ` Perdeu😥 \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	   
 switch(command) {
 case 'menu': case 'help':
 if (!isRegistrar) return m.reply(mess.registro)
let men = `
╭━━ ⪩
▢ き⃟✨ ɴᴏᴠᴏs ᴍᴇɴᴜ ✨⃟ き
▢ ╭═══⊷
▢ ⌁ /Ip
▢ ⌁ /Cep  
▢ ⌁ /bug (informe se encontrar bugs) 
▢ ⌁ /gay
▢ ⌁ /loli
▢ ⌁ /waifu
▢ ⌁ /tiktok (baixa video e audio)
▢ ⌁ /gato
▢ ⌁ /cafe
▢ ⌁ /caracoroa
▢ ⌁ /dado
▢ ⌁ /roleta
▢ ⌁ /cassino
▢ ⌁ /metadinha
▢ ⌁ /pinterest
▢ ⌁ /binario
▢ ⌁ /dbinario
▢ ⌁ /rpg
▢ ⌁ /menuaudio
╭━━ ⪩
▢ き⃟✨ Comando Grupo ✨⃟ き
▢ ╭═══⊷
▢ ⌁ /delete
▢ ⌁ /marcar
▢ ⌁ /notif
▢ ⌁ /rebaixar
▢ ⌁ /daradm
▢ ⌁ /ban
▢ ⌁ /antilink
▢ ⌁ /linkgrupo
▢ ⌁ /reviver 
▢ ⌁ /add (add um novo membro)
╭━━ ⪩
▢ き⃟✨ Figurinhas ✨⃟ き
▢ ╭═══⊷
▢ ⌁ /f ou /figu  (faz figurinha)
▢ ⌁ /tomp4
▢ ⌁ /toaudio
▢ ⌁ /tomp3
▢ ⌁ /togif
▢ ⌁ /toimg
▢ ⌁ /ftexto (coloca texto na figurinha)
▢ ╰═══⊷
╰━━━ ⪨`
let butt = [{ buttonId: `null`, buttonText: { displayText: 'vlw bot' }, type: 1 }]
let buttonMessageMenu = {
      image: { url: 'https://cataas.com/cat/cute' },
      caption: men,
      footer: sai,
      buttons: butt,
      headerType: 4
     }
chika.sendMessage(from, buttonMessageMenu, { quoted: m }) 
break
case 'backup':
if (!isCreator) throw mess.owner
chika.sendMessage(`${ownernomer}@s.whatsapp.net`, {document: {url: './Rikka.json'}, mimetype: 'application/json', fileName: '© Sesion-Bot.json'}, {quoted:m})
await tempo(5000)
m.reply('pronto (ʘᴗʘ✿)')
break
 case 'lv': case 'lvv':
 if (!isRegistrar) return m.reply(mess.registro)
const rxp = 5000
addLevelingXp(m.sender, rxp)
done = `add com sucesso`
let but = [{ buttonId: `null`, buttonText: { displayText: 'aa' }, type: 1 }]
chika.sendButtonText(from, but, done, sai, verificado)
break
case 'di': case 'dinheiro':
if (!isRegistrar) return m.reply(mess.registro)
if (isCart < 5000) return m.reply('vc nao tem dinheiro suficiente')
const dd = 5000
confirmPag(m.sender, dd)
done = `add dinheiro com sucesso`
let bitu = [{ buttonId: `null`, buttonText: { displayText: 'aa' }, type: 1 }]
chika.sendButtonText(from, bitu, done, sai, verificado)
break
 case 'level': case 'meulevel':
 if (!isRegistrar) return m.reply(mess.registro)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
done = `📍 *PERFIL DO JOGADOR*\n • Nome : ${pushname}\n • Rank : ${role}\n • Xp : ${getLevelingXp(m.sender)}/${reqXp}\n • Level : ${getLevelingLevel(m.sender)}`
let buttons = [{ buttonId: `/inventario`, buttonText: { displayText: 'Inventario' }, type: 1 }]
chika.sendButtonText(from, buttons, done, sai, verificado)
break
case 'rpg':
if (!isRegistrar) return m.reply(mess.registro)
let imgrpg = fs.readFileSync('./lib/image/bookrules.jpeg')
let regrasrpg = ` escolha a baixo oq quer desse video `
    let butRpg = [{
  urlButton: {
      displayText: 'Codigo fonte',
      url: `${sc}`
  }
  }, {
  urlButton: {
      displayText: 'Contato',
      url: `wa.me/558287515844`
  }
  }, {
  quickReplyButton: {
      displayText: '...',
      id: '/gato'
  }
  }]
chika.send5ButImg(from, regrasrpg, chika.user.name, imgrpg, butRpg)
break
 case 'entrarrpg': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (isRpg) return m.reply('vc ja estar no rpg')
let boy = `*vc entrou no rpg*`
 let buttons5 = [
{ buttonId: `/inventario`, buttonText: { displayText: 'Ver mochila' }, type: 1 }
]
addInventoriLimit(m.sender)
addInventario(m.sender)
addCarteira(m.sender)
addInventoriVida(m.sender)
await chika.sendButtonText(m.chat, buttons5, boy, sai, verificado)
}
break
 case 'perfil': {
let boy = `*Seu dinheiro* : ${ChecarCart(m.sender)} \n*Seu limite* : ${getLimit(m.sender)} \n*Sua vida*: ${getVida(m.sender)}`
 let buttons = [
{ buttonId: `null`, buttonText: { displayText: ' ' }, type: 1 }
]
await chika.sendButtonText(m.chat, null, boy, sai, verificado)
}
break
case 'oi': {
if (!isRegistrar) return m.reply(mess.registro)
if (!isRpg) return reply(mess.player)
if (isVivo < 1) return m.reply('Você está exausto!, tente curar usando poções') 
addLimit(m.sender, 1)
addCoins(m.sender, 10)
TirarVida(m.sender, 10)
let boy = `Adicionado limit com sucesso`
 let buttons1 = [
{ buttonId: `/perfil`, buttonText: { displayText: 'Ver perfil' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons1, boy, sai, verificado)
}
break
case 'remo': {
confirmPag(m.sender, 158)
let boy = `Adicionado limit com sucesso`
 let buttons = [
{ buttonId: `/inventario`, buttonText: { displayText: 'Ver perfil' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons, boy, sai, verificado)
}
break
case 'add': {
if (!isCreator) throw mess.owner
addLimit(m.sender, 8)
let boy = `Adicionado limit com sucesso`
 let buttons = [
{ buttonId: `/inventario`, buttonText: { displayText: 'Ver perfil' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons, boy, sai, verificado)
}
break
case 'inventario': {
if (!isRpg) return reply(mess.player)
if (!isRegistrar) return m.reply(mess.registro)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const testet = `
╭─「 📍 𝗗𝗮𝗱𝗼𝘀 𝗱𝗼 𝗝𝗼𝗴𝗮𝗱𝗼𝗿 」
│ 
│• Nome : ${pushname}
│• Rank : ${role}
│• Status : GM
│• Xp : ${getLevelingXp(m.sender)}/${reqXp}
│• Level : ${getLevelingLevel(m.sender)}
│• Limit* : ${getLimit(m.sender)}
│
╰───────────────────
╭─「 🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗿𝗶𝗼 」
│
│• ❤️𝐕𝐢𝐝𝐚 : ${getVida(m.sender)}
│• ◻️️𝐅𝐞𝐫𝐫𝐨𝐬 : ${getFerro(m.sender)}
│• 🌟𝐎𝐮𝐫𝐨𝐬 : ${getOuro(m.sender)}
│• 🟢𝐄𝐬𝐦𝐞𝐫𝐚𝐥𝐝𝐚𝐬 : ${getEmd(m.sender)}
│• 💎𝗗𝗶𝐚𝐦𝐚𝐧𝐭𝐞𝐬 : ${getDm(m.sender)}
│• 🧪𝐏𝐨𝐜𝐨𝐞𝐬 : ${getPotion(m.sender)}
│• 🪙𝐂𝐨𝐢𝐧𝐬 : ${ChecarCart(m.sender)}
│• 🐟𝐏𝐞𝐢𝐱𝐞𝐬 : ${getFish(m.sender)}
│
│ 
╰───────────────────
`
 let jojo = [
{ buttonId: `null`, buttonText: { displayText: ' ' }, type: 1 }
]
await chika.sendButtonText(m.chat, null, testet, sai, verificado)
}
break
case 'curar':{
if (!isRpg) return reply(mess.player)
if (!isRegistrar) return m.reply(mess.registro)
 if (!isVivo <= 0) return m.reply('Você só pode curar quando sua vida for 0')
 if (isVivo > 100) return m.reply('Seu sangue está cheio')
 if (isPocao < 1) return m.reply('Você não tem Poção') 
 addVida(m.sender, 100)
 TirarPotion(m.sender, 1)
 m.reply('Tomando poção..')
 await tempo(5000)
 m.reply('Esperando efeito colateral')
 await tempo(3000)
 m.reply('Funcionou, seu sangue está cheio!')
 }
 break
case 'cassino':
if (isLimit < 1) return m.reply(mess.semLimit)
if (!isRpg) return reply(mess.player)
if (!isRegistrar) return m.reply(mess.registro)
const somtoy2 = cassino[Math.floor(Math.random() * cassino.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '?? : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '?? : 🍇 : 🍇')) {
var vit = "Você ganhou!!!"
} else {
var vit = "Você perdeu..."
}
let caca =`
 Consiga 3 iguais para ganhar

  ┏━━━━❪🎰❫━━━━
  ┣►${somtoy2}◄┛
  ┗━━━━❪💰❫━━━━  

*${vit}*`
let mob = [
{buttonId: `/cassino`, buttonText: { displayText: 'Next' }, type: 1}]
chika.sendButtonText(m.chat, mob, caca, sai, m)
tirarLimit(m.sender, 1)
//chika.sendMessage(from, buttonkMessage, m.mtype.buttonsResponseMessage, {quoted: m})
if (vit == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 9) + 55
addCoins(m.sender, dinherocassino)
setTimeout( () => {
m.reply(`Parabéns você ganhou *${dinherocassino}* Coins 💰🪙`)
}, 1100)
}
break
case 'minerar': case 'minerar':{
if (isVivo < 1) return m.reply('Você está exausto!, tente curar usando poções') 
if (isLimit < 1) return m.reply(mess.semLimit)
if (!isRpg) return reply(mess.player)
if (!isRegistrar) return m.reply(mess.registro)
  let ferro = [1,2,5,1,3,1,2,3,1,2,2,1,1,4,1,5,0,2]
  let ouro = [4,1,2,3,1,1,2,0,1,1,3,0,2]
  let emd = [2,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1]
  let dm = [2,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1]
  var ferroram = ferro[Math.floor(Math.random() * ferro.length)]  
  var ouroram = ouro[Math.floor(Math.random() * ouro.length)]  
  var emdram = emd[Math.floor(Math.random() * emd.length)]  
  var dmram = dm[Math.floor(Math.random() * dm.length)]  
  setTimeout( () => {
  let caption = `[ *RESULTADO DA MINERAÇÃO* ⛏️ ]\n*Ferro* : ${ferroram}\n*Ouro* : ${ouroram}\n*Esmeralda* : ${emdram}\n*Diamante* : ${dmram}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Minerar novamente  ⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './lib/image/minerar.jpeg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  chika.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Iniciou uma mineração  ⛏️`, m)
  }, 1500)
  TirarVida(m.sender, 20)
  addOuro(m.sender, ouroram)
  addFerro(m.sender, ferroram)
  addEmd(m.sender, emdram)	 
  addDm(m.sender, dmram)	     
  }   
  break
// LOJA
case 'comprar': case 'buy':{
 if (!q) return  m.reply(`O que você quer comprar?\nExemplo : ${prefix + command} Pocao 2`)
 if (!isRpg) return reply(mess.player)
 if (!isRegistrar) return m.reply(mess.registro)
 var anu = args[1]
  if (args[0] === 'pocao'){
  let noh = 150 * anu
 if (!args[1]) return m.reply(`Exemplo : ${prefix + command} pocao 2\n 1 potion = 150 Coins`)
 if (ChecarCart(m.sender) < noh) return m.reply('Vc não tem Coins suficientes 🤨')
 confirmPag(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
 let popo = ` き⃟💲TRANSFERÊNCIA💲️⃟き
 
• Vendedor : Sailor Vendedora
• Comprador : ${pushname}
• Preço : 150 Coins
• Quantidade : ${anu}
• Total A Pagar : ${noh}
• Status : 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼 𝗕𝗲𝗺-𝘀𝘂𝗰𝗲𝗱𝗶𝗱𝗼
• Suas Poções : ${getPotion(m.sender)}
• Seu Dinheiro : ${ChecarCart(m.sender)}
`
let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '😮😮️'}, type: 1},]
 m.reply(`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼...`)
 await tempo(2000)
 setTimeout( () => {
let buttonMessage = {
      image: { url: './lib/image/potion.jpeg' },
      caption: popo,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })
  }, 2000) 
 } else 
 if (args[0] === 'isca'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
// VENDER
case 'Vender': case 'vender':{
 if (!q) return  m.reply(`O que você quer vender?\nExemplo : ${prefix + command} ferro 2`)
 if (!isRpg) return reply(mess.player)
 if (!isRegistrar) return m.reply(mess.registro)
 var anu = args[1]
 if (args[0] === 'ferro'){
 if (getFerro(m.sender) < anu) return m.reply('Voce nao tem essa quantidade de ferros 🤨')
 if (!args[1]) return m.reply(`Exemplo : ${prefix + command} ferro 2\n 1 ferro = 2 Coins`)
 TirarFerro(m.sender, anu)
 let monaynya = 2 * anu
 addCoins(m.sender, monaynya)
 m.reply(`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼...`)
 await tempo(4000)
 setTimeout( () => {
 m.reply(` き⃟💲TRANSFERÊNCIA💲️⃟き
 
• Vendedor : ${pushname}
• Comprador : Sailor-Bot
• Preço : 2 Coins
• Quantidade : ${anu}
• Total A Receber : ${monaynya}
• Status : 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼 𝗕𝗲𝗺-𝘀𝘂𝗰𝗲𝗱𝗶𝗱𝗼
• Seus Ferros : ${getFerro(m.sender)}
• Seu Dinheiro : ${ChecarCart(m.sender)}
`)
  }, 2000) 
 } else
 if (args[0] === 'dima'){
 if (getDm(m.sender) < anu) return m.reply('Voce nao tem essa quantidade de Diamantes 🤨')
 if (!args[1]) return m.reply(`Exemplo : ${prefix + command} dima 2\n 1 dima = 7 Coins`)
 TirarDm(m.sender, anu)
 let monaynya = 7 * anu
 addCoins(m.sender, monaynya)
 m.reply(`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼...`)
 await tempo(4000)
  setTimeout( () => {
  m.reply(` き⃟💲TRANSFERÊNCIA💲️⃟き
 
• Vendedor : ${pushname}
• Comprador : Sailor-Bot
• Preço : 7 Coins
• Quantidade : ${anu}
• Total A Receber : ${monaynya}
• Status : 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼 𝗕𝗲𝗺-𝘀𝘂𝗰𝗲𝗱𝗶𝗱𝗼
• Seus Diamantes : ${getDm(m.sender)}
• Seu Dinheiro : ${ChecarCart(m.sender)}
`)
  }, 2000) 
 } else
 if (args[0] === 'esmeralda'){
 if (getEmd(m.sender) < anu) return m.reply('Voce nao tem essa quantidade de Esmeraldas 🤨')
 if (!args[1]) return m.reply(`Exemplo : ${prefix + command} esmeralda 2\n 1 Esmeralda = 10 Coins`)
 TirarEmd(m.sender, anu)
 let monaynya = 10 * anu
 addCoins(m.sender, monaynya)
 m.reply(`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼...`)
 await tempo(4000)
  setTimeout( () => {
  m.reply(` き⃟💲TRANSFERÊNCIA💲️⃟き
 
• Vendedor : ${pushname}
• Comprador : Sailor-Bot
• Preço : 10 Coins
• Quantidade : ${anu}
• Total A Receber : ${monaynya}
• Status : 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼 𝗕𝗲𝗺-𝘀𝘂𝗰𝗲𝗱𝗶𝗱𝗼
• Suas Esmeraldas : ${getEmd(m.sender)}
• Seu Dinheiro : ${ChecarCart(m.sender)}
`)
  }, 2000) 
 } else
 if (args[0] === 'ouro'){
 if (getOuro(m.sender) < anu) return m.reply('Voce nao tem essa quantidade de Ouro 🤨')
 if (!args[1]) return m.reply(`Exemplo : ${prefix + command} ouro 2\n 1 ouro = 4 Coins`)
 TirarOuro(m.sender, anu)
 let monaynya = 4 * anu
 addCoins(m.sender, monaynya)
 m.reply(`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼...`)
 await tempo(4000)
  setTimeout( () => {
  m.reply(` き⃟💲TRANSFERÊNCIA💲️⃟き
 
• Vendedor : ${pushname}
• Comprador : Sailor-Bot
• Preço : 4 Coins
• Quantidade : ${anu}
• Total A Receber : ${monaynya}
• Status : 𝗣𝗮𝗴𝗮𝗺𝗲𝗻𝘁𝗼 𝗕𝗲𝗺-𝘀𝘂𝗰𝗲𝗱𝗶𝗱𝗼
• Seus Ouros : ${getOuro(m.sender)}
• Seu Dinheiro : ${ChecarCart(m.sender)}
`)
  }, 2000) 
 } else
 if (args[0] === 'wendel'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Formato incorreto!") }

 }
 break

/************** case plaquinhas ************/
case 'plaquinha1':
if (!isRegistrar) return m.reply(mess.registro)
if (args.length < 1) return m.reply('digite o texto, exemplo: /plaquinha1 Wendel')
teks = body.slice(12)
if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
m.reply('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
chika.sendMessage(from, { image: buffer }, {quoted: m, caption: 'Ta na mão 😈\n\n𝙳𝙾𝙽𝙾: Wendel'})
break

case 'plaquinha2':
if (!isRegistrar) return m.reply(mess.registro)
if (args.length < 1) return m.reply('digite o texto, exemplo: /plaquinha2 Wendel')
teks = body.slice(11)
if (teks.length > 10) return m.reply('O texto é longo, até 10 caracteres')
m.reply('*Estou fazendo... *')
buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
chika.sendMessage(from, { image: buffer }, {quoted: m, caption: 'ai está 😈\n\n𝙳𝙾𝙽𝙾: Wendel ne'})
break

case 'plaquinha':
if (!isRegistrar) return m.reply(mess.registro)
if (args.length < 1) return m.reply('digite o texto, exemplo: /plaquinha Wendel')
teks = body.slice(10)
if (teks.length > 20) return m.reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
m.reply('ESPERE...')
buffer = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
chika.sendMessage(from, { image: buffer }, {quoted: m, caption: 'PRONTINHO AQUI ESTAR SUA PLAQUINHA 😈\n\n𝙳𝙾𝙽𝙾: Wendel kkkk'})
break
            					
case 'bug':
if (!q) return m.reply('Sem bugs?🥰')
const bug = `${q}`
 if (args.length > 300) throw chika.sendMessage(from, 'Máximo 300 caracteres', {quoted: m})
var nomor = m.participant
teks1 = `╭━─━─━─≪⌾≫─━─━─━─━
│ ⋟ Reportes De Bugs
│ 
│ ⋟ 𝖣𝖾: ${pushname}
│ ⋟ 𝖭𝗎𝗆𝖾𝗋𝗈: @${m.sender.split("@s.whatsapp.net")[0]}
│ 
│ ⋟ Bug Reportado: ${bug}
│
│ 
│
╰━─━─━─≪_⌾_≫─━─━─━`
var options = {text: teks1, contextInfo: {mentionedJid: [m.sender]},}
chika.sendMessage(`${ownernomer}@s.whatsapp.net`, options, text, {quoted: m})
m.reply("Bug reportado ao dono 😎🙏.")
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (!isRegistrar) return m.reply(mess.registro)
 let TicTacToe = require("./lib/tictactoe")
 this.game = this.game ? this.game : {}
 if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Você ainda está no jogo'
 let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
 if (room) {
 m.reply('Parceiros encontrados!')
 room.o = m.chat
 room.game.playerO = m.sender
 room.state = 'PLAYING'
 let arr = room.game.render().map(v => {
 return {
 X: '❌',
 O: '⭕',
 1: '1️⃣',
 2: '2️⃣',
 3: '3️⃣',
 4: '4️⃣',
 5: '5️⃣',
 6: '6️⃣',
 7: '7️⃣',
 8: '8️⃣',
 9: '9️⃣',
 }[v]
 })
 let str = `ID Da Sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Esperando @${room.game.currentTurn.split('@')[0]}

digite *desistir* para render-se e admitir a derrota`
 if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
 await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
 } else {
 room = {
 id: 'tictactoe-' + (+new Date),
 x: m.chat,
 o: '',
 game: new TicTacToe(m.sender, 'o'),
 state: 'WAITING'
 }
 if (text) room.name = text
 m.reply('Esperando o parceiro' + (text ? ` digite o comando abaixo ${prefix}${command} ${text}` : ''))
 this.game[room.id] = room
 }
 }
 break

 case 'delttc': case 'delttt': {
 this.game = this.game ? this.game : {}
 try {
 if (this.game) {
 delete this.game
 chika.sendText(m.chat, `Excluir com sucesso a sessão TicTacToe`, m)
 } else if (!this.game) {
 m.reply(`Sessão TicTacToe🎮 não existe`)
 } else throw '?'
 } catch (e) {
 m.reply('encerrado')
 }
 }
 break

 case 'desafiar': case 'suit': {
 if (!isRegistrar) return m.reply(mess.registro)
 this.suit = this.suit ? this.suit : {}
 let poin = 10
 let poin_lose = 10
 let timeout = 60000
 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete o desafio anterior`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Não pode jogar com você mesmo!`)
 if (!m.mentionedJid[0]) return m.reply(`Quer jogar com quem?_\nMarque a pessoa..\n\nExemplo : ${prefix}desafiar @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `A pessoa que você está desafiando está jogando com outra pessoa :(`
 let id = 'suit_' + new Date() * 1
 let caption = `_*DESAFIO PvP*_

@${m.sender.split`@`[0]} desafiou @${m.mentionedJid[0].split`@`[0]} no PvP

Por favor @${m.mentionedJid[0].split`@`[0]} digite aceitar ou rejeitar`
 this.suit[id] = {
 chat: await chika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
 id: id,
 p: m.sender,
 p2: m.mentionedJid[0],
 status: 'wait',
 waktu: setTimeout(() => {
 if (this.suit[id]) chika.sendText(m.chat, `_Tempo Acabou_`, m)
 delete this.suit[id]
 }, 60000), poin, poin_lose, timeout
 }
 }
 break

 case 'chat': {
 if (!isCreator) throw mess.owner
 if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
 if (args[0] === 'mute') {
     chika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'unmute') {
     chika.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'archive') {
     chika.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'unarchive') {
     chika.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'read') {
     chika.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'unread') {
     chika.chatModify({ markRead: falbse }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'delete') {
     chika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} })
 }
 }
 break

 case 'casal': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `👫Sua Alma gêmea é

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
 let ments = [me, jodoh]
 let buttons = [
         { buttonId: 'jodohku', buttonText: { displayText: 'minha alma gêmea' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
 }
 break

case 'cbot': {
if (!isCreator) throw mess.owner
let boy = `E so um teste boy🤨`
 let buttons = [
{ buttonId: `/public`, buttonText: { displayText: 'Bot On' }, type: 1 },
{ buttonId: `/self`, buttonText: { displayText: 'Bot Off' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons, boy, chika.user.name, m)
}
break
 case 'jadian': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `pode ser um casal bonito💖 Não se esqueça do imposto🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
 let menst = [orang, jodoh]
 let buttons = [
  { buttonId: 'jadian', buttonText: { displayText: 'minha alma gêmea' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
 }
 break
case 'gay':
if (!q) return m.reply(`Use ${command} Nome\n\nExemplo : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
chika.sendMessage(from, { text: `${q} é *${sange}%* gay` }, { quoted: m })
break

 case 'entrar': case 'botentrar': {
 if (!isCreator) throw mess.owner
 if (!text) throw 'Insira um link de grupo!'
 if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Inválido!'
 m.reply(mess.wait)
 let result = args[0].split('https://chat.whatsapp.com/')[1]
 await chika.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 }
 break
 case 'sair': case 'botsair': {
 if (!isCreator) throw mess.owner
 await chika.groupLeave(`${ownernomer}@s.whatsapp.net`).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 }
 break
 case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Exemplo : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif foi alterado com sucesso para\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
 }
 break
case 'kick': case 'ban': 
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!isRegistrar) return m.reply(mess.registro)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
kick = m.message.extendedTextMessage.contextInfo.participant
const response = await chika.groupParticipantsUpdate(
    from, 
    [kick],
    "remove" 
)
m.reply('Usuario Removido')
break
case 'reviver': case 'add1':
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!isRegistrar) return m.reply(mess.registro)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
add = m.message.extendedTextMessage.contextInfo.participant
const response2 = await chika.groupParticipantsUpdate(
    from, 
    [add],
    "add" 
)
m.reply('Usuario Adicionado de volta ao grupo.')
break
case 'promover': case 'daradm':
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!isRegistrar) return m.reply(mess.registro)
 if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
promover = m.message.extendedTextMessage.contextInfo.participant
const response3 = await chika.groupParticipantsUpdate(
    from, 
    [promover],
    "promote" 
)
marcar = m.message.extendedTextMessage.contextInfo.participant
m.reply(`*@${marcar.split('@')[0]}* Agora é admintrador.`)
break
case 'demote': case 'rebaixar': 
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
if (!isRegistrar) return m.reply(mess.registro)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
rebaixar = m.message.extendedTextMessage.contextInfo.participant
const response4 = await chika.groupParticipantsUpdate(
    from, 
    [rebaixar],
    "demote" 
)
marcar2 = m.message.extendedTextMessage.contextInfo.participant
m.reply(`Pronto, *@${marcar2.split('@')[0]}* Perdeu seu cargo de admintrador`)
break 
case 'add': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
if (!isRegistrar) return m.reply(mess.registro)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'block': case 'bloquear': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await chika.updateBlockStatus(users, 'block').then((res) => m.reply(`Usuario bloqueado com sucesso`))
}
break
 case 'unblock': case 'desbloquear': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await chika.updateBlockStatus(users, 'unblock').then((res) => m.reply(`Usuario Desbloqueado com sucesso`))
}
break

case 'blockspawn': {
if (!isCreator) throw mess.owner
let user = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
m.reply('COMEÇANDO EM 5 SEGUNDO')
await tempo(5000)
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
chika.updateBlockStatus(user, 'block').then
chika.updateBlockStatus(user, 'unblock').then
await tempo(8000)
reply('ACABOU 🤠')
}
break
case 'mudarnome': case 'nomegrupo': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!text) throw 'cade o texto ?'
 await chika.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
 }
 break
case 'setdesc': case 'Descricao': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!text) throw 'cade o texto ?'
 await chika.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
 }
 break
case 'setppbot': case 'ftbot': {
 if (!isCreator) throw mess.owner
 if (!quoted) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 if (!/image/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 if (/webp/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 await chika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
 m.reply(mess.success)
 }
 break

case 'imgbot': case 'setft': case 'setppgc': {
 if (!m.isGroup) throw mess.group
 if (!isAdmins) throw mess.admin
 if (!quoted) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 if (!/image/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 if (/webp/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 await chika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 m.reply(mess.success)
 }
 break
 case 'marcar': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!isRegistrar) return m.reply(mess.registro)
let teks = `══✪〘 *👥 Marcar todos* 〙✪══
 
 ➲ *Mensagem : ${q ? q : 'em branco'}*\n\n`
 for (let mem of participants) {
 teks += `⭔ @${mem.id.split('@')[0]}\n`
 }
 chika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: verificado })
 }
 break
 case 'notif': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!isRegistrar) return m.reply(mess.registro)
 chika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: verificado })
 }
 break
case 'votar': {
 if (!m.isGroup) throw mess.group
 if (!isRegistrar) return m.reply(mess.registro)
 if (m.chat in vote) throw `_Ainda há votos neste chat!_\n\n*${prefix}deletevote* - para deletar votos`
 if (!text) throw `Digite o motivo da votação, exemplo: *${prefix + command} Wendel é lindo*`
 m.reply(`A Votação começou!\n\n*${prefix}upvote* - Concordo\n*${prefix}devote* - Nao concordo\n*${prefix}vervoto* - para verificar os votos\n*${prefix}deletevote* - para deletar votos`)
 vote[m.chat] = [q, [], []]
 await sleep(1000)
 upvote = vote[m.chat][1]
 devote = vote[m.chat][2]
 teks_vote = `*「 VOTAÇÃO 」*

*Razao da votação:* ${vote[m.chat][0]}

┌〔 APOIA 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 NÃO APOIA 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - para deletar votos`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

 let buttonMessageVote = {
 text: teks_vote,
 footer: sai,
 buttons: buttonsVote,
 headerType: 1
 }
 chika.sendMessage(m.chat, buttonMessageVote)
	    }
 break
    case 'upvote': {
 if (!m.isGroup) throw mess.group
 if (!isRegistrar) return m.reply(mess.registro)
 if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'Você ja votou'
 vote[m.chat][1].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `*「 VOTAÇÃO 」*

*Razao da votação:* ${vote[m.chat][0]}

┌〔 APOIA 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO APOIA 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - para deletar votos`
 let buttonsUpvote = [
   {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
   {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
 ]

 let buttonMessageUpvote = {
 text: teks_vote,
 footer: sai,
 buttons: buttonsUpvote,
 headerType: 1,
 mentions: menvote
  }
 chika.sendMessage(m.chat, buttonMessageUpvote)
	    }
  break
 case 'devote': {
 if (!m.isGroup) throw mess.group
 if (!isRegistrar) return m.reply(mess.registro)
 if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'Você ja votou'
 vote[m.chat][2].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `*「 VOTAÇÃO 」*

*Razão da votação:* ${vote[m.chat][0]}

┌〔 APOIA 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO APOIA 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - para deletar votos`
 let buttonsDevote = [
   {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
   {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
 ]

 let buttonMessageDevote = {
 text: teks_vote,
 footer: sai,
 buttons: buttonsDevote,
 headerType: 1,
 mentions: menvote
 }
 chika.sendMessage(m.chat, buttonMessageDevote)
	}
 break
  
case 'vervoto':
if (!m.isGroup) throw mess.group
if (!isRegistrar) return m.reply(mess.registro)
if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`
teks_vote = `*「 VOTAÇÃO 」*

*Razão da votação:* ${vote[m.chat][0]}

┌〔 APOIA 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO APOIA 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - para deletar votos


©${sai}
`
chika.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': {
if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`
 delete vote[m.chat]
 m.reply('Votação encerrada')
  }
 break
case 'group': case 'grupo': {
if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === 'fechar'){
     await chika.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo fechado com sucesso`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'abrir'){
     await chika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Grupo aberto com sucesso`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 let buttons = [
  { buttonId: '/group abrir', buttonText: { displayText: 'Abrir' }, type: 1 },
  { buttonId: '/group fechar', buttonText: { displayText: 'Fechar' }, type: 1 }
     ]
await chika.sendButtonText(m.chat, buttons, `Configuracoes do Grupo`, sai, m)

  }
 }
 break
case 'anagrama':
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
 if(args.length == 0) return m.reply('use *anagrama ativar para ativar o jogo do anagrama\npara desativar user *anagrama desativar')
if (args.join(' ') === 'ativar') {
if(fs.existsSync(`./database/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/anagrama-${from}.json`))
m.reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./database/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
sexo = `
╭━━ ⪩
▢ き⃟🧧_${command}_🧧⃟ き
▢ ╭═══⊷
▢ ⌁ _*Descubra A Palavra*_
▢ ⌁ _*Anagrama: ${palavrasANA[anaaleatorio].embaralhada}*_
▢ ⌁ _*Dica: ${palavrasANA[anaaleatorio].dica}*_
▢ ╰═══⊷
╰━━━ ⪨`
let buttons = [
  { buttonId: 'a', buttonText: { displayText: 'ta bom' }, type: 1 },
  { buttonId: 'b', buttonText: { displayText: 'ok' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, sexo, sai, m)
}
} else if (args.join(' ') ==='desativar') {
if(!fs.existsSync(`./database/anagrama-${from}.json`)) return m.reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./database/anagrama-${from}.json`)
m.reply("Desativado com sucesso")
}
break
 case 'antilink': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.data.chats[m.chat].antilink) return m.reply(`Ja esta ativo`)
 db.data.chats[m.chat].antilink = true
 m.reply(`Antilink Ativado !`)
 } else if (args[0] === "off") {
 if (!db.data.chats[m.chat].antilink) return m.reply(`Ja esta desativado`)
 db.data.chats[m.chat].antilink = false
 m.reply(`Antilink Desativado!`)
 } else {
  let buttons = [
  { buttonId: '/antilink on', buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: '/antilink off', buttonText: { displayText: 'Off' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `Sistema de Antilink 🤨`, sai, m)
 }
  }

case 'a':{
if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
if (args[0] === 'on') {
if (db.data.chats[m.chat].antiflod) return m.reply(`ja ta ativo`)
db.data.chats[m.chat].antiflod = true
m.reply(`${chika.user.name} ativou antiflod neste grupo !`)
fs.writeFileSync('./database/_antiflod.json', JSON.stringify(antiflod))
m.reply(`[❗] Comando ${command} ativado, Aparti de agora não pode flodar comandos`)
} else if (args[0] === 'off') {
 if (!db.data.chats[m.chat].antiflod) return m.reply(`Ja esta desativado`)
db.data.chats[m.chat].antiflod = false
m.reply(`${chika.user.name} desativou o antiflod neste grupo !`)
 } else {
  let buttons = [
  { buttonId: '/a on', buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: '/a off', buttonText: { displayText: 'Off' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `anti flod 😳😔🤨🥳😥❤️🍐🥳😎❤️`, sai, m)
 }
  }
break
 case 'linkgrupo': case 'linkgc': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!m.isGroup) throw mess.group
 let response = await chika.groupInviteCode(m.chat)
 chika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
 }
 break
 case 'ephemeral': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (!text) throw 'Insira os valores de ativação/desativação'
 if (args[0] === 'enable') {
     await chika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'disable') {
     await chika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 }
 }
 break
 case 'delete': case 'del': {
if (!isRegistrar) return m.reply(mess.registro)
 if (!m.quoted) throw false
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) throw 'A mensagem não foi enviada por mim!'
 chika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
 case 'bcgc': case 'bcgroup': {
 if (!isCreator) throw mess.owner
 if (!text) throw `Falta o texto\n\nExemplo : ${prefix + command} Wendel lindo`
 let getGroups = await chika.groupFetchAllParticipating()
 let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
 let anu = groups.map(v => v.id)
 m.reply(`Enviar transmissão para ${anu.length} chat de grupo, Tempo de término${anu.length * 1.5} segundo`)
 for (let i of anu) {
     await sleep(1500)
     let btn = [{
  quickReplyButton: {
      displayText: 'Donasi',
      id: 'donasi'
  }
  }, {
  quickReplyButton: {
      displayText: 'Menu',
      id: 'menu'
  }
  }]
       let txt = `「 Transmissão Bot 」\n\n${text}`
       chika.send5ButImg(i, txt, sai, global.thumb, btn)
     }
 m.reply(`Transmissão enviada com sucesso para ${anu.length} chat de Grupo`)
 }
 break
       /*     case 'bc': case 'broadcast': case 'bcall': {
 if (!isCreator) throw mess.owner
 if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
 let anu = await store.chats.all().map(v => v.id)
 m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
  urlButton: {
      displayText: 'Codigo fonte',
      url: `${sc}`
  }
  }, {
  urlButton: {
      displayText: 'Contato',
      url: `wa.me/558287515844`
  }
  }, {
  quickReplyButton: {
      displayText: 'Menu',
      id: 'menu'
  }
  }, {
  quickReplyButton: {
      displayText: '...',
      id: 'gato'
  }
  }]
       let txt = `「 Broadcast Bot 」\n\n${text}`
       chika.send5ButImg(yoi, txt, chika.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
 }
 break*/
 case 'infochat': {
 if (!m.quoted) m.reply('Marque')
 let msg = await m.getQuotedObj()
 if (!m.quoted.isBaileys) throw ('A mensagem não foi enviada pelo bot!')
 let teks = ''
 for (let i of msg.userReceipt) {
     let read = i.readTimestamp
     let unread = i.receiptTimestamp
     let waktu = read ? read : unread
     teks += `⭔ @${i.userJid.split('@')[0]}\n`
     teks += ` ┗━⭔ *Tempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'lido' : 'Enviado'}\n\n`
 }
 chika.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'q': case 'quoted': {
if (!m.quoted) return m.reply('marque a msg!')
let wokwol = await chika.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('A mensagem que você respondeu não contém uma resposta')
await wokwol.quoted.copyNForward(m.chat, true)
 }
break
 case 'listpv': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `⬣ *LISTA DE BATE-PAPO PESSOAL*\n\nTotal Chat : ${anu.length} Chat\n\n`
  for (let i of anu) {
      let nama = store.messages[i].array[0].pushName
      teks += `⬡ *Nome :* ${nama}\n⬡ *Usuario :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
  }
  chika.sendTextWithMentions(m.chat, teks, m)
  }
  break
 case 'listgp': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `⬣ *LISTA DE GRUPO*\n\nTotal : ${anu.length} Grupos\n\n`
  for (let i of anu) {
      let metadata = await chika.groupMetadata(i)
      teks += `⬡ *Nome :* ${metadata.subject}\n⬡ *Dono :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Criado em :* ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Membros :* ${metadata.participants.length}\n\n────────────────────────\n\n`
  }
  chika.sendTextWithMentions(m.chat, teks, m)
  }
  break
  case 'listonline': case 'liston': {
     let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
     let online = [...Object.keys(store.presences[id]), botNumber]
     chika.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
  }
  break
 case 'figura': case 'f': case 'figu': case 'figurinha': {
if (!isRegistrar) return m.reply(mess.registro)
 if (!quoted) throw `Marque vídeo/imagem com legenda ${prefix + command}`
 m.reply(mess.wait)
     if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await chika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
 let media = await quoted.download()
 let encmedia = await chika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
 await fs.unlinkSync(encmedia)
 } else {
 throw `Enviar imagem/vídeo com a legenda ${prefix + command}\nDuração do vídeo no máximo 10 Segundo`
 }
 }
 break
case 'ftexto': case 'figut': case 'stickmeme': {
if (!isRegistrar) return m.reply(mess.registro)
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Enviar/responder foto com legenda ${prefix + command} *texto*`)
if (text.includes('|')) return m.reply(`Enviar/responder foto com legenda ${prefix + command} *texto*`)
if (!/image/.test(mime)) return m.reply(`Enviar/responder foto com legenda ${prefix + command} *texto*`)
m.reply(mess.wait)
mee = await chika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await chika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
 case 'binario': {
 if (!m.quoted.text && !text) throw `Enviar/responder texto com legenda ${prefix + command}`
 let { eBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let eb = await eBinary(teks)
 m.reply(eb)
 }
 break
 case 'dbinario': {
 if (!m.quoted.text && !text) throw `Enviar/responder texto com legenda ${prefix + command}`
 let { dBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let db = await dBinary(teks)
 m.reply(db)
 }
 break
 case 'emojimix': {
 if (!isRegistrar) return m.reply(mess.registro)
	 if (!text) throw `Exemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await chika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
 case 'toimage': case 'toimg': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!quoted) throw 'Marque a figurinha'
 if (!/webp/.test(mime)) throw `Marque a figurinha com legenda *${prefix + command}*`
 m.reply(mess.wait)
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 let ran = await getRandom('.png')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
     fs.unlinkSync(media)
     if (err) throw err
     let buffer = fs.readFileSync(ran)
     chika.sendMessage(m.chat, { image: buffer }, { quoted: m })
     fs.unlinkSync(ran)
 })
 }
 break
case 'ip':{
if (!isRegistrar) return m.reply(mess.registro)
   ipi = body.slice(4)
   m.reply(`AGUARDE UM POUCO💤`)
   let res = await fetchJson(`https://ipinfo.io/${ipi}/json`)
   let taka = `     ↜ *INFORMAÇÕES DO IP* ↝\n
➞ Ip = ${res.ip}
➞ Pais = ${res.country}
➞ Estado = ${res.region}
➞ Cidade = ${res.city}
➞ Loc = ${res.loc}
➞ Empresa = ${res.org}
➞ Host = ${res.hostname}
➞ postal = ${res.postal}
➞ timezone = ${res.timezone}`
 let buttons = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons, taka, sai, m)
}
 break
case 'cep':{
if (!isRegistrar) return m.reply(mess.registro)
   cep = body.slice(5)
   m.reply(`AGUARDE UM POUCO💤`)
   let res = await fetchJson(`https://viacep.com.br/ws/${cep}/json`)
   let tuk = `     ↜ *INFORMAÇÕES DO IP* ↝\n
➞ Cep = ${cep}
➞ Estado = ${res.uf}
➞ Bairro = ${res.bairro}
➞ Cidade = ${res.localidade}
➞ Rua = ${res.logradouro}
➞ ddd = ${res.ddd}`
 let buttons = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
await chika.sendButtonText(m.chat, buttons, tuk, sai, m)
}
 break
	 case 'tomp4': case 'tovideo': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!quoted) throw 'marque a figurinha'
 if (!/webp/.test(mime)) throw `Marque a figurinha com: *${prefix + command}*`
 m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break
 case 'toaud': case 'toaudio': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envie/responda o vídeo/áudio que deseja usar como áudio com legenda ${prefix + command}`
 if (!quoted) throw `Envie/responda o vídeo/áudio que deseja usar como áudio com legenda ${prefix + command}`
 m.reply(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 chika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
 break
 case 'tomp3': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (/document/.test(mime)) throw `Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`
 if (!quoted) throw `Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`
 m.reply(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 chika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${chika.user.name}.mp3`}, { quoted : m })
 }
 break
 case 'togif': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!quoted) throw 'Marque a figurinha'
 if (!/webp/.test(mime)) throw `Responda a figurinha com: *${prefix + command}*`
 m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break
	 case 'tourl': {
 if (!isRegistrar) return m.reply(mess.registro)
 m.reply(mess.wait)
		 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
     let anu = await TelegraPh(media)
     m.reply(util.format(anu))
 } else if (!/image/.test(mime)) {
     let anu = await UploadFileUgu(media)
     m.reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break
 case 'google': {
 if (!isRegistrar) return m.reply(mess.registro)
 if (!text) throw `Example : ${prefix + command} fatih arridho`
 let google = require('google-it')
 google({'query': text}).then(res => {
 let teks = `Google Search From : ${text}\n\n`
 for (let g of res) {
 teks += `⭔ *Title* : ${g.title}\n`
 teks += `⭔ *Description* : ${g.snippet}\n`
 teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
 } 
 m.reply(teks)
 })
 }
 break
 case 'pinterest': {
 if (!isRegistrar) return m.reply(mess.registro)
 m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
 anu = await pinterest(text)
 result = anu[Math.floor(Math.random() * anu.length)]
 chika.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
 }
 break
 
	    case 'metadinha': {
if (!isRegistrar) return m.reply(mess.registro)
 m.reply(mess.wait)
 let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 chika.sendMessage(m.chat, { image: { url: random.male }, caption: `Metadinha Masculino` }, { quoted: m })
 chika.sendMessage(m.chat, { image: { url: random.female }, caption: `Metadinha Feminino` }, { quoted: m })
 }
break

case 'menuaudio':
if (!isRegistrar) return m.reply(mess.registro)
let buti = `
╭━━ ⪩
▢ き⃟✨ Menu Audio ✨⃟ き
▢ ╭═══⊷
▢ ⌁ /bass (grave)
▢ ⌁ /fast
▢ ⌁ /slow
▢ ⌁ /robot
▢ ⌁ /tupai
▢ ⌁ /nightcore
▢ ╰═══⊷
╰━━━ ⪨`
let biiit = [{ buttonId: `null`, buttonText: { displayText: '😎' }, type: 1 }]
chika.sendButtonText(from, biiit, buti, sai, verificado)
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
 try {
 let set
 if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
 if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
 if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
 if (/earrape/.test(command)) set = '-af volume=12'
 if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
 if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
 if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
 if (/reverse/.test(command)) set = '-filter_complex "areverse"'
 if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
 if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
 if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
 if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
 if (/audio/.test(mime)) {
 m.reply(mess.wait)
 let media = await chika.downloadAndSaveMediaMessage(quoted)
 let ran = getRandom('.mp3')
 exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
 fs.unlinkSync(media)
 if (err) return m.reply(err)
 let buff = fs.readFileSync(ran)
 chika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
 fs.unlinkSync(ran)
 })
 } else m.reply(`Responda ao áudio que deseja alterar com uma legenda *${prefix + command}*`)
 } catch (e) {
 m.reply(e)
 }
 break
 case 'setcmd': {
 if (!m.quoted) throw 'Reply Pesan!'
 if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
 if (!text) throw `Untuk Command Apa?`
 let hash = m.quoted.fileSha256.toString('base64')
 if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
 global.db.data.sticker[hash] = {
     text,
     mentionedJid: m.mentionedJid,
     creator: m.sender,
     at: + new Date,
     locked: false,
 }
 m.reply(`Done!`)
 }
 break
 case 'delcmd': {
 let hash = m.quoted.fileSha256.toString('base64')
 if (!hash) throw `Tidak ada hash`
 if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'   
 delete global.db.data.sticker[hash]
 m.reply(`Done!`)
 }
 break
 case 'listcmd': {
 let teks = `
*List Hash*
Info: *bold* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
 chika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
 }
 break
 case 'lockcmd': {
 if (!isCreator) throw mess.owner
 if (!m.quoted) throw 'Reply Pesan!'
 if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
 let hash = m.quoted.fileSha256.toString('base64')
 if (!(hash in global.db.data.sticker)) throw 'Hash não encontrado no banco de dados'
 global.db.data.sticker[hash].locked = !/^un/i.test(command)
 m.reply('Done!')
 }
 break
 case 'addmsg': {
 if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
 }
 break
 case 'getmsg': {
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 chika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
 }
 break
 case 'listmsg': {
 let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	 let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	 }
	 m.reply(teks)
	    }
	    break
 case 'delmsg': case 'deletemsg': {
	 let msgs = global.db.data.database
	 if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' não listado na lista de mensagens`)
		delete msgs[text.toLowerCase()]
		m.reply(`Excluído com sucesso '${text}' da lista de mensagens`)
 }
	    break
	    case 'anonymous': {
 if (m.isGroup) return m.reply('Recursos não podem ser usados ​​para grupos!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
     { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
 ]
 chika.sendButtonText(m.chat, buttons, `\`\`\`Oi ${await chika.getName(m.sender)} Bem-vindo ao chat anônimo\n\nclique no botão abaixo para encontrar um parceiro\`\`\``, chika.user.name, m)
 }
			break
 case 'keluar': case 'leave': {
 if (m.isGroup) return m.reply('Recursos não podem ser usados ​​para grupos!')
 this.anonymous = this.anonymous ? this.anonymous : {}
 let room = Object.values(this.anonymous).find(room => room.check(m.sender))
 if (!room) {
     let buttons = [
  { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um parceiro \`\`\``)
     throw false
 }
 m.reply('Ok')
 let other = room.other(m.sender)
 if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
 delete this.anonymous[room.id]
 if (command === 'leave') break
 }
 case 'mulai': case 'start': {
 if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
 this.anonymous = this.anonymous ? this.anonymous : {}
 if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
     let buttons = [
  { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, chika.user.name, m)
     throw false
 }
 let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
 if (room) {
     let buttons = [
  { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
  { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
     ]
     await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
     room.b = m.sender
     room.state = 'CHATTING'
     await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
 } else {
     let id = + new Date
     this.anonymous[id] = {
  id,
  a: m.sender,
  b: '',
  state: 'WAITING',
  check: function (who = '') {
  return [this.a, this.b].includes(who)
  },
  other: function (who = '') {
  return who === this.a ? this.b : who === this.b ? this.a : ''
  },
     }
     let buttons = [
  { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `\`\`\`Aguarde, procurando um parceiro\`\`\``, chika.user.name, m)
 }
 break
 }
 case 'next': case 'lanjut': {
 if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
 this.anonymous = this.anonymous ? this.anonymous : {}
 let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
 if (!romeo) {
     let buttons = [
  { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um parceiro\`\`\``)
     throw false
 }
 let other = romeo.other(m.sender)
 if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
 delete this.anonymous[romeo.id]
 let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
 if (room) {
     let buttons = [
  { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
  { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
     ]
     await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
     room.b = m.sender
     room.state = 'CHATTING'
     await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
 } else {
     let id = + new Date
     this.anonymous[id] = {
  id,
  a: m.sender,
  b: '',
  state: 'WAITING',
  check: function (who = '') {
  return [this.a, this.b].includes(who)
  },
  other: function (who = '') {
  return who === this.a ? this.b : who === this.b ? this.a : ''
  },
     }
     let buttons = [
  { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
     ]
     await chika.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere procurando por parceiro\`\`\``, chika.user.name, m)
 }
 break
 }
 case 'public': {
 if (!isCreator) throw mess.owner
 chika.public = true
 m.reply('Bot ta On 🤨')
 }
 break
 case 'self': {
 if (!isCreator) throw mess.owner
 chika.public = false
 m.reply('Bot desligado 😔')
 }
 break
 case 'ping':{
 if (!isRegistrar) return m.reply(mess.registro)//PEDI O REGISTRO
 const used = process.memoryUsage()
 const cpus = os.cpus().map(cpu => {
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			 return cpu
 })
 const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
 }, {
     speed: 0,
     total: 0,
     times: {
			 user: 0,
			 nice: 0,
			 sys: 0,
			 idle: 0,
			 irq: 0
 }
 })
 let timestamp = speed()
 let latensi = speed() - timestamp
 neww = performance.now()
 oldd = performance.now()
 respon = `
Velocidade de resposta ${latensi.toFixed(4)} _Segundos_ \n\nTempo Ativo : ${runtime(process.uptime())}

💻 Informações do servidor
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
 `.trim()
 m.reply(respon)
 }
 break
 case 'speedtest': {
 if (!isRegistrar) return m.reply(mess.registro)
 m.reply('Testing Speed...')
 let cp = require('child_process')
 let { promisify } = require('util')
 let exec = promisify(cp.exec).bind(cp)
   let o
   try {
   o = await exec('python speed.py')
   } catch (e) {
   o = e
  } finally {
 let { stdout, stderr } = o
 if (stdout.trim()) m.reply(stdout)
 if (stderr.trim()) m.reply(stderr)
 }
 }
 break
 case 'owner': case 'dono': {
 chika.sendContact(m.chat, global.owner, m)
 }
 break
case 'tp': {
if (!isRegistrar) return m.reply(mess.registro)
const templateMessage = {
text: '*🚀 Bot Aktif Selama*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'meu insta', 
url: `${ig}`
}
},
],
}
const sendm = chika.sendMessage(from, templateMessage)
}
break
case 'speed': {
if (!isRegistrar) return m.reply(mess.registro)
let timestamp = speed()
let latensi = speed() - timestamp
const templateMessage = {
text: '*⚡ Kecepatan Bot*',footer: `${latensi.toFixed(4)} Second`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'YouTube Creator', 
url: `${ig}`
}
},
],
}
const sendm = chika.sendMessage(from, templateMessage)
}
break

case 'dado': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const dadus = ["1","2","3","4","5","6"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./lib/image/dados/'+dadu+'.webp')
chika.sendImageAsSticker(m.chat, dador, m, { packname: global.packname, author: `by: ウェンデル` })
break

case 'roleta': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./lib/image/figu/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
chika.sendImageAsSticker(m.chat, figb, m, { packname: global.packname, author: `by: ウェンデル` })
}, 2100)
}
setTimeout( () => {
let tam1 = [
      {buttonId: `/tambor`, buttonText: {displayText: 'tentar dnv'}, type: 1}
  ]
chika.sendButtonText(m.chat, tam1, morte, sai, m)
}, 2300)
break

case 'caracoroa': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const cara = fs.readFileSync('./lib/image/cara/cara.webp');
const coroa = fs.readFileSync('./lib/image/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
m.reply(`voce conseguiu: ${fej}`)
cararoa = fs.readFileSync('./lib/image/cara/'+fej+'.webp')
chika.sendImageAsSticker(m.chat, cararoa, m, { packname: global.packname, author: `by: ウェンデル` })
break

case 'gato': case 'gatinho': {
if (!isRegistrar) return m.reply(mess.registro)
     m.reply(mess.wait)
     let buttons = [
      {buttonId: `/gato`, buttonText: {displayText: 'Quero mais 🥺'}, type: 1}
  ]
  let buttonMessage = {
      image: { url: 'https://cataas.com/cat/cute' },
      caption: `Olha que fofineo🐈🐈‍⬛`,
      footer: ownername,
      buttons: buttons,
      headerType: 4
  }
  chika.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     break
case 'coffe': case 'cafe': {
if (!isRegistrar) return m.reply(mess.registro)
     reply(mess.wait)
     let buttons = [
      {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
  ]
  let buttonMessage = {
      image: { url: 'https://coffee.alexflipnote.dev/random' },
      caption: `☕ Random Coffe`,
      footer: ownername,
      buttons: buttons,
      headerType: 4
  }
  chika.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
if (!isRegistrar) return m.reply(mess.registro)
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						chika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break

case 'tiktok':
if (!isRegistrar) return m.reply(mess.registro)
if (!q) return m.reply('cade o link?')
if (!q.includes('tiktok')) return reply('Isso não é um link do tiktok!')
let tiktom = ` escolha a baixo oq quer desse video ${q}`
let buttiktok = [
      {buttonId: `/ttkaudio ${q}`, buttonText: {displayText: 'Audio'}, type: 1},
      {buttonId: `/ttksem ${q}`, buttonText: {displayText: 'video'}, type: 1}
  ]
chika.sendButtonText(m.chat, buttiktok, tiktom, sai, m)
break

case 'ttkaudio':
case 'tiktokmusic':{
  if (!q) return reply('cade o link?')
  if (!q.includes('tiktok')) return reply('Isso não é um link do tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(err) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    chika.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'toktok':{
  if (!q) return reply('Link?')
  m.reply(mess.wait)
  if (!q.includes('tiktok')) return reply('Isso não é um link do tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(err) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.watermark
    chika.sendMessage(from, { video: { url: musim_duren_v }, caption: `Para baixar sem marca d água.. /tiktok ${q}` }, { quoted: m })
   }
  break
  case 'ttksem':{
  if (!q) return reply('link?')
  m.reply(mess.wait)
  if (!q.includes('tiktok')) return reply('Isso não é um link do tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(err) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    chika.sendMessage(from, { video: { url: musim_duren_v }, caption: "aqui ó!" }, { quoted: m })
   }
  break

case 'attp':
if (!isRegistrar) return m.reply(mess.registro)
if (args.length < 1) return enviar('_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*')
m.reply(mess.wait)
axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
.then(({data}) => {
chika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break

case 'loli':
if (!isRegistrar) return m.reply(mess.registro)
wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
anu1 = await getBuffer(wipi)
await chika.sendMessage(from, {
image: anu1,
quoted: m,
caption: '© 2022 Sailor-md'
})      
break

case 'waifu': 
if (!isRegistrar) return m.reply(mess.registro)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
chika.sendImage(m.chat, data.url, '© 2022 Sailor-md', m)
})
break

case 't':
let del = fs.readFileSync('./lib/image/rikkacs.jpeg')
await chika.send5ButImg(from, sai, `© ${sai}`, del, [{"quickReplyButton": {"displayText": "Teste ne","id": null}},{"quickReplyButton": {"displayText": "reste 2","id": '/ping'}}] )
break


 default:
 
  if (body == `${prefix + command}`) {
chika.sendTextWithMentions(m.chat, `
╭────── • ◆ • ──────
│ ⟅❗CMD NÃO ENCONTRADO❗⟆ 
╠────── • ◆ • ──────
│♞Ξ ❯ Olá ${m.sender.split("@")[0]}!
│♞Ξ ❯ O comando: ${prefix}${command}
│♞Ξ ❯ Não existe ou digitou errado
│♞Ξ ❯ Verifique usando /menu
╰────── • ◆ • ──────`)
}

if (body == `${prefix + command}`)  {
console.log( chalk.redBright(`${prefix}${command}`), chalk.redBright('não registrado',), chalk.redBright('de'), chalk.redBright(pushname))
}
 
 
 if (budy.startsWith('=>')) {
     if (!isCreator) return m.reply(mess.owner)
     function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
     }
     try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
     } catch (e) {
  m.reply(String(e))
     }
 }

 if (budy.startsWith('>')) {
     if (!isCreator) return m.reply(mess.owner)
     try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
     } catch (err) {
  await m.reply(String(err))
     }
 }

 if (budy.startsWith('$')) {
     if (!isCreator) return m.reply(mess.owner)
     exec(budy.slice(2), (err, stdout) => {
  if(err) return m.reply(err)
  if (stdout) return m.reply(stdout)
     })
 }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
     this.anonymous = this.anonymous ? this.anonymous : {}
     let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
     if (room) {
  if (/^.*(next|leave|start)/.test(m.text)) return
  if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
  let other = [room.a, room.b].find(user => user !== m.sender)
  m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
  ...m.msg.contextInfo,
  forwardingScore: 0,
  isForwarded: true,
  participant: other
  }
  } : {})
     }
     return !0
 }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
 }
 

    } catch (err) {
 m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
