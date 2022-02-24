import React, { useState } from 'react';
import axios from 'axios'

const SongForm = ({ fetchSongs, isEdit, closeModal, song}) => {

   const [title, setTitle ] = useState(song ? song.title : '')
   const [writer, setWriter] = useState(song ? song.writer : '')

   const handleSubmit = async (e) => {
      e.preventDefault()

      if(!isEdit){
         try {
            const newSong = { title, writer}
            const { data } = await axios.post('/songs', newSong)
            setTitle('')
            setWriter('')
            fetchSongs()
            } catch (error) {
               console.log(error.message)
            }
         } else {
            try {
               const { id } = song
               const editedSong = { title, writer }
               const { data } = await axios.put(`/songs/${id}`, editedSong)
               closeModal()
            } catch (error) {
               console.log(error.message)
            }
            
         }
      }
   
   return (
      <div className="max-w-screen-lg m-auto">
         <h3 className="text-xl text-left p-2 bg-blue-100 text-black rounded-t-lg">{isEdit ? 'Edit a song' : 'Add a song'} </h3>
         <form className="p-2 rounded-b-lg bg-blue-100" onSubmit={handleSubmit}>
            <label className="block text-left py-2">
               <span className="text-black">Song title:</span>
               <input 
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full p-2 rounded-lg focus:outline outline-4 outline-sky-700 text-black"
               />
            </label>
            <label className="block text-left py-2">
               <span className="text-black"> Writer:</span>
               <input 
                  type="text"
                  required
                  onChange={e => setWriter(e.target.value)}
                  value={writer}
                  className="w-full p-2 rounded-lg focus:outline outline-4 outline-sky-700 text-black"
               />
            </label>
            <button className="text-lg rounded-lg border-2 border-white text-white bg-sky-700 hover:bg-sky-500 px-2 py-1" >{isEdit ? 'Edit Song' : 'Add Song'}</button>
         </form>
      </div>
   )
};

export default SongForm;
