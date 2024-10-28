import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, total, products, resetBasket }) {
    return (
        <>
            {
                basket.map
                    ((item, index) => <BasketItem
                        key={index}
                        item={item}
                        product={products.find(p => p.id == item.id)}
                    />)
            }
            <div>Toplam: ${total}</div>
            <button
                onClick={resetBasket}
                className='bg-gray-300 
                        py-1
                        px-6 
                        rounded-sm 
                        hover:bg-gray-500 
                        hover:text-white'

            >Sepeti Sıfırla</button>
        </>
    )
}

export default Basket