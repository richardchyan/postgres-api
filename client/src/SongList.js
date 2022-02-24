import React, { Fragment, useEffect, useState} from 'react'
import SingleSong from './SingleSong'
import axios from 'axios'

const SongList = ({ songs, fetchSongs }) => {

  return (
    <Fragment>
     <h1 className="text-4xl">List of all songs</h1>
     <div className="grid grid-cols-3 max-w-screen-xl m-auto">
      {songs.map(song => (
         <SingleSong song={song} key={song.id} fetchSongs={fetchSongs} />
         ))}
     </div>
    
   </Fragment>
  )
}

export default SongList