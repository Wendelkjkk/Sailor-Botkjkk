  const fs = require('fs')
  let _vidaNe = JSON.parse(fs.readFileSync('./database/datauser/vida.json'))

  const addInventoriVida = (sender) => {
        const obj = {id: sender, vida: 100}
         _vidaNe.push(obj)
        fs.writeFileSync('./database/datauser/vida.json', JSON.stringify(_vidaNe, null, 2))
   }
  const ChecarVida = (sender) => {
            let status = false
            Object.keys(_vidaNe).forEach((i) => {
                if (_vidaNe[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addVida = (sender, amount) => {
            let position = false
            Object.keys(_vidaNe).forEach((i) => {
                if (_vidaNe[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _vidaNe[position].vida += amount
                fs.writeFileSync('./database/datauser/vida.json', JSON.stringify(_vidaNe, null, 2))
            }
        }
   const TirarVida = (sender, amount) => {
            let position = false
            Object.keys(_vidaNe).forEach((i) => {
                if (_vidaNe[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _vidaNe[position].vida -= amount
                fs.writeFileSync('./database/datauser/vida.json', JSON.stringify(_vidaNe, null, 2))
            }
        }
   const getVida = (sender) => {
            let position = false
            Object.keys(_vidaNe).forEach((i) => {
                if (_vidaNe[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _vidaNe[position].vida
            }
        }     
        
   module.exports = { addInventoriVida, ChecarVida, addVida, TirarVida, getVida }   