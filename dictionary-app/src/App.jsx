import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitons from './components/Definitions/Definitons';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dictionaryApi();
  }, [word, category])

  console.log(meanings)
  console.log(word, category)
  return (
    <div className='h-screen bg-[#282c34] text-white ' >
      <Container maxWidth="md" className='flex flex-col h-screen'>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings && (
          <Definitons word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  )
}

export default App
