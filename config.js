import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const { Pool } = pg 

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// Method 1

// const devConfig = {
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT,
//    database: process.env.DB_DATABASE
// }

// const prodConfig = {
//    connectionString: process.env.DATABASE_URL // comes from the heroku addon settings in CONFIG VARS 
// }

// const pool = new Pool(process.env.NODE_ENV === "production" ? prodConfig : devConfig )

// Method 2 

// const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const prodConfig = process.env.DATABASE_URL

// const pool = new Pool({ 
//    connectionString: process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
//    ssl: { rejectUnauthorized: false }
// })

// Method 3 With SSL reject autoenabled through object

const sslDevConfig =  {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE
   }

const sslProdConfig = { connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}}

const pool = new Pool(process.env.NODE_ENV === 'production' ? sslProdConfig : sslDevConfig )

export default pool

