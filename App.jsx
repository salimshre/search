import { useState } from 'react'


import './App.css'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
      <div className='app'>
        <div className='search-bar-container'>
          <div>Search</div>
          <SearchBar />
        
           </div>
        </div>
    </>
  )
}

export default App
// hello world