
import { useState, useEffect } from 'react'
import Header from './components/Header'
import products from './products.json'
import Product from './components/Product'
import Basket from './components/Basket'

function App() {

  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    const totalAcc = basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)
    setTotal(totalAcc)
  }, [basket])
  return (
    <>
      <Header
        money={money}
        total={total}
      />
      {products.map((product, id) =>
      (<Product
        key={id}
        product={product}
        basket={basket}
        setBasket={setBasket}
        total={total}
        money={money}
      />))}

      {total > 0 &&
        <Basket resetBasket={resetBasket} total={total} basket={basket} products={products} />
      }


    </>
  )
}

export default App
