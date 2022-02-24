import React, { useState } from 'react'
import axios from 'axios'
import Modal from './Modal'
import SongForm from './SongForm'

const SingleSong = ({ song, fetchSongs }) => {

  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    fetchSongs()
    setIsEdit(false)
  }

  const handleEdit = async(id) => {
    setIsEdit(true)
    openModal()
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/songs/${id}`)
      fetchSongs()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="text-xl w-full m-auto border-2 rounded-md  bg-sky-700 text-white py-2">
      <h1 className="uppercase tracking-wide">Song # - {song.id}</h1>
      <p>Song Title: {song.title}</p>
      <p>Writer: {song.writer}</p>
      <div className="space-x-4 mt-4">
        <button className="text-xl py-2 px-3 rounded bg-amber-500" onClick={() => handleEdit(song.id)}>Edit</button>
        <button className="text-xl py-2 px-3 rounded bg-red-700" onClick={() => handleDelete(song.id)}>Delete</button>
      </div>
      {showModal && 
      <Modal closeModal={closeModal}>
        <SongForm isEdit={isEdit} setIsEdit={setIsEdit} closeModal={closeModal} song={song}/>
      </Modal>}
    </div>
  )
}

export default SingleSong