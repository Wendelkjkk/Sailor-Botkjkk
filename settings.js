const fs = require('fs')
const chalk = require('chalk')


// geral
global.prefix = '/'
global.owner = ['558287515844','558699760561','a']
global.premium = ['558287515844']
global.ownernomer = '558287515844'
global.ownername = 'ウェンデル'
global.botname = 'Rikka-Bot'
global.footer = 'リッカ'
global.ig = 'https://instagram.com/wendelkjkk'
global.email = 'wendelkjkk@gmail.com'
global.region = 'brazil'
global.sc = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Sailor-Bot'
global.author = 'リッカ'
global.sessionName = 'Rikka'
global.sp = '⭔'
global.mess = {
    success: '✓ Pronto',
    admin: 'So Quem é adm pode me dar este comando!',
    botAdmin: 'Me da ADM Que faço isso 🤨!',
    player: `Opa, parece que você não entro no rpg ainda!!\nPara se tornar um aventureiro digite :\n/Rpg`,
    registro: `
╔━━━━━━━━━━━━━━━━━━╗
    *REGISTRO OBRIGATÓRIO*
╚━━━━━━━━━━━━━━━━━━╝
╔━━━━━━━━━━━━━━━━━━╗
  Olá Siga As Instruções Abaixo
  Digite: *login* no chat
         
   Ass: _SailorBot_
╚━━━━━━━━━━━━━━━━━━╝
	`,
    owner: 'Voce nao é o meu dono 🤨',
    group: 'Este comando é para grupos! ^_^',
    private: 'So respondo No pv! (◕ᴗ◕✿)',
    bot: 'Este comando ai so eu posso usar😎',
    wait: 'Aguarde...',
    endLimit: 'Seu limit acabou 😞',
    semLimit: 'Vc não tem limit suficiente (｡•́︿•̀｡)',
    error: 'Nao consegui completar, tenta novamente ou tu pode xingar meu dono kkkkkkkk🤠!',
    }

global.thumb = fs.readFileSync('./lib/image/chika.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizacao'${__filename}'`))
	delete require.cache[file]
	require(file)
})
