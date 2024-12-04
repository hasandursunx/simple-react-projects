import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/content'
import Sidebar from './components/sidebar'
import MainContext from './MainContext'
import BrandsData from './brands.json'
import Copied from './components/copied'
import { BrowserRouter, Routes, Route } from "react-router";
import Collection from './components/collection'

function App() {

  const brandArray = []
  Object.keys(BrandsData).map(key => brandArray.push((BrandsData[key])));


  const [brands, setBrands] = useState(brandArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [copied])

  useEffect(() => {
    setBrands(brandArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])


  return (
    <MainContext.Provider value={data}>
      <div className='flex w-full h-screen'>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content />} />
            {<Route path='/collection/:slugs' element={<Collection />} />}
          </Routes>

        </BrowserRouter>
        {copied && <Copied color={copied} />}
      </div>
    </MainContext.Provider>
  )
}

export default App
