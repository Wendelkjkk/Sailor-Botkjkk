  const fs = require('fs')
  let _limitOrg = JSON.parse(fs.readFileSync('./database/datauser/limit.json'))
  const addInventoriLimit = (sender) => {
        const obj = {id: sender, limit: 5}
         _limitOrg.push(obj)
        fs.writeFileSync('./database/datauser/limit.json', JSON.stringify(_limitOrg, null, 2))
   }
  const checarlimit = (sender) => {
            let status = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit += amount
                fs.writeFileSync('./database/datauser/limit.json', JSON.stringify(_limitOrg, null, 2))
            }
        }
   const tirarLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit -= amount
                fs.writeFileSync('./database/datauser/limit.json', JSON.stringify(_limitOrg, null, 2))
            }
        }
   const getLimit = (sender) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limitOrg[position].limit
            }
        }     
        
   module.exports = { addInventoriLimit, checarlimit, addLimit, tirarLimit, getLimit }   