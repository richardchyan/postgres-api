import express, { urlencoded, json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './config.js'
import path from 'path'
// import helmet from 'helmet'
// import compression from 'compression' 
// import rateLimit from 'express-rate-limit' 
// import { body, check } from 'express-validator' 


const __dirname = path.resolve()
dotenv.config()
const app = express()

app.use(cors())
app.use(json({ extended: true }))
app.use(urlencoded({ extended: true }))

// app.use(express.static("client/build"))

app.use(express.static(path.join(__dirname, "client/build")))

// Serving static content from the build folder
if(process.env.NODE_ENV === 'production'){
   // Serve static content from npm run build
   app.use(express.static(path.join(__dirname, "client/build")))
}

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
   console.log(`server is now running on port ${PORT}`);
})

// Functions

const getSongs = async(req, res) => {

   try {
      const { id } = req.params
      const results = await pool.query((
         'SELECT * FROM songs ORDER BY id ASC'
      ))
      res.status(200).json(results.rows)
   } catch (error) {
      console.log(error);
   }
}

const addSong = async(req, res) => {

   try {
      const { title, writer } = req.body

      await pool.query(
         'INSERT INTO songs (title, writer) VALUES ($1, $2)', [title, writer]
      )
      res.status(201).json({ status: 'success', message: 'Song added'})
   } catch (error) {
      console.log(error.message);
   }
}

const editSong = async(req, res) => {

   try {
      const { id } = req.params
      const { title, writer } = req.body

      await pool.query(
         `UPDATE songs SET title = $1, writer = $2 WHERE id = $3`, [title, writer, id]
      )
      res.status(200).send(`song with id ${id} udpated`)
   } catch (error) {
      console.log(error.message)
   }

}

const deleteSong = async(req, res) => {

   try {
      const { id } = req.params 
      
      await pool.query(
         ` DELETE FROM songs WHERE id = $1`, [id]
      )
      res.status(200).send(`User with id ${id} is deleted`)
   } catch (error) {
      console.log(error.message)
   }
}

// Routes
app.get('/songs', getSongs)
app.post('/songs', addSong)
app.put('/songs/:id', editSong)
app.delete('/songs/:id', deleteSong)

// Catch all error route

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

