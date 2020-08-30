const mongoose = require('mongoose')
const { mongo_db } = require('../.env')
console.log('mongo_db', mongo_db)
mongoose.connect(`mongodb://${mongo_db.host}:${mongo_db.port}/${mongo_db.database}?authSource=admin`, { 
  useNewUrlParser: true,
  user: mongo_db.user,
  pass: mongo_db.password
})
.catch(e => {
    const msg = 'Não foi possível conectar ao MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})