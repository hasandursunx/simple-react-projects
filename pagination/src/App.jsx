import './app.css'
import { useEffect, useState } from 'react'
function App() {

  const [products, setProducts] = useState();
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState()
  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
    const data = await res.json()

    if (data && data.products) {
      setProducts(data.products)
      setTotalPages(Math.ceil(data.total / 10))
    }

  }
  const dizi = [10]
  dizi.map((t, i) => {
    console.log("test" + t + i)
  })

  useEffect(() => {
    fetchProduct()
  }, [page])

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage)
    }
  }

  return (
    <div>
      {
        products?.length > 0 && (
          <div className='products'>
            {products.map((prod) => {
              return (
                <span className='products__single' key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span style={{
                    display: 'inline-block',
                    width: '190px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                  }}> {prod.title} </span>
                </span>
              )
            })}

          </div>
        )
      }
      {products?.length > 0 && (
        <div className='pagination'>
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? " " : "pagination__disabled"}
          >«</span>
          {
            [...Array(totalPages)].map((_, i) => {
              return <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}> {i + 1}</span>
            })
          }
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < totalPages ? " " : "pagination__disabled"}>»</span>
        </div>)}
    </div>
  )
}

export default App
