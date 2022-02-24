import React, { useEffect, useState } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'
import axios from 'axios'

const Home = () => {

  const [songs, setSongs] = useState([])

  const fetchSongs = async() => {

    try {
       const { data } = await axios.get('/songs')
       console.log(data)
       setSongs(data)
    } catch (error) {
       console.log(error.message)
    }
 }
 
  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <div className="py-4 px-2">
      <SongForm fetchSongs={fetchSongs} songs={songs}/>
      <SongList songs={songs} setSongs={setSongs} fetchSongs={fetchSongs}  />
   </div>
  )
}

export default Home