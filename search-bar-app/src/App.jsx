
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className='flex justify-center items-center flex-col pt-28 min-w-[400] w-full'>
      <div className='w-[450]'>
        <SearchBar setResult={setResult} />
        <SearchResult result={result} />
      </div>
    </div>
  )
}

export default App
