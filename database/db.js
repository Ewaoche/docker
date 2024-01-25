const mongoose = require('mongoose')

// const mongoUrl = isDevEnv ? process.env.LocalMONGO : process.env.MONGO
// const mongoUrl = "mongodb://ewaoche:AppDev123%@mongo:27017/node-dockerdb/?authSource=admin"
 LocalMONGO="mongodb://mongo:27017/node-dockerdb"

mongoose.set('strictQuery', false)
const connnectDb = async () => {
  const conn = await mongoose.connect(LocalMONGO)

  console.log(`Connected to database on ${conn.connection.host}`)
}

module.exports = connnectDb
