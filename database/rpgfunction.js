const fs = require('fs')
let _RPG = JSON.parse(fs.readFileSync('./database/datauser/inventario.json'))

//== Ouro Inventory   

        const addOuro = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ouro += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
        
        const TirarOuro = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ouro -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }        
        
        const getOuro = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ouro
            }
        }

//== Diamond Inventory

     const addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamante += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
        
     const TirarDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamante -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
              
           const getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamante
            }
        }
//== esmeralda
  const addEmd = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].esmeralda += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
   const TirarEmd = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].esmeralda -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
   const getEmd = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].esmeralda
            }
        }

           
//== Iron Inventory
        
       const addFerro = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ferro += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
        
       const TirarFerro = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ferro -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
                
       const getFerro = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ferro
            }
        }
 
//== Fish Inventory

       const addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].peixe += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
        
       const TirarFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].peixe -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        } 
               
       const getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].peixe
            }
        }
        
// Poção invetario
  const addPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion += amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
   const TirarPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion -= amount
                fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
            }
        }
   const getPotion = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].potion
            }
        }       
                       
/**
 * Add User Initial Inventory
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const addInventario = (sender) => {
            const obj = {id: sender, ouro: 0, diamante: 0, esmeralda: 0, ferro: 0, peixe: 0, potion: 1}
            _RPG.push(obj)
            fs.writeFileSync('./database/datauser/inventario.json', JSON.stringify(_RPG, null, 2))
        }
        
/**
 * Check Adventure User
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const checkRpg = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
module.exports = { checkRpg, addInventario, addFerro, TirarFerro, getFerro, addEmd, TirarEmd, getEmd, addDm, TirarDm, getDm, addOuro, TirarOuro, getOuro, addFish, TirarFish, getFish, addPotion, TirarPotion, getPotion }