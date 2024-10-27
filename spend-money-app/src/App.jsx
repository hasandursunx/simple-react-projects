
import { useState, useEffect } from 'react'
import Header from './components/Header'
import products from './products.json'
import Product from './components/Product'

function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])

  useEffect(() => {
    console.log(basket)
  }, [basket])
  return (
    <>
      <Header money={money} />
      {products.map((product, id) =>
      (<Product
        key={id}
        product={product}
        basket={basket}
        setBasket={setBasket}
      />))}
    </>
  )
}

export default App
