const fs = require('fs')
let _coins = JSON.parse(fs.readFileSync('./database/datauser/carteira.json'));
const addCarteira = (sender, pushname) => {
const obj = {id: sender, nome: pushname, coins: 0}
_coins.push(obj)
fs.writeFileSync('./database/datauser/carteira.json', JSON.stringify(_coins, null, 2))
}

const getNameCoins = (sender) => {
let position = false
Object.keys(coins).forEach((i) => {
if (_coins[i].id === sender) {
position = i
}
})
if (position !== false) {
return _coins[position].nome
}
}

const addCoins = (sender, amount) => {
let position = false
Object.keys(_coins).forEach((i) => {
if (_coins[i].id === sender) {
position = i
}
})
if (position !== false) {
_coins[position].coins += amount
fs.writeFileSync('./database/datauser/carteira.json', JSON.stringify(_coins, null, 2))
}
}
   
const ChecarCart = (sender) => {  
let position = false
Object.keys(_coins).forEach((i) => {
if (_coins[i].id === sender) {
position = i
}
})
if (position !== false) {
return _coins[position].coins
}
}

const confirmPag = (sender, amount) => {
let position = false
Object.keys(_coins).forEach((i) => {
if (_coins[i].id === sender) {
position = i
}
})
if (position !== false) {
_coins[position].coins -= amount
fs.writeFileSync('./database/datauser/carteira.json', JSON.stringify(_coins, null, 2))
}
}

module.exports = { addCarteira, getNameCoins, addCoins, ChecarCart, confirmPag }   