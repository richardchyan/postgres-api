import React, {Fragment} from 'react'

const EditModal = () => {
  return (
    <Fragment>
       <div className="bg-gray-800 bg-opacity-90 fixed top-0 left-0 w-full h-screen z-20">
        <form className="p-2 bg-amber-600 rounded-b-lg" onSubmit={handleSubmit}>
              <label className="block text-left py-2">
                <span className="text-white">Song title:</span>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full p-2 rounded-lg"
                />
              </label>
              <label className="block text-left py-2">
                <span className="text-white"> Writer:</span>
                <input 
                    type="text"
                    required
                    onChange={e => setWriter(e.target.value)}
                    value={writer}
                    className="w-full p-2 rounded-lg"
                />
              </label>
              <button className="text-lg rounded-lg border-2 border-white text-white bg-sky-700 hover:bg-sky-500 px-2 py-1" >Add song</button>
          </form>
      </div>
    </Fragment>
  )
}

export default EditModal