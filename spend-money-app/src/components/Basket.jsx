import React from 'react'
import { moneyFormat } from '../helpers'
import BasketItem from './BasketItem'

function Basket({ basket, total, products, resetBasket }) {
    return (
        <div className='w-[1200px] m-auto bg-white my-8 py-6 px-10 '>
            <div className='text-2xl mb-4'> Alışveriş Detayları</div>
            {
                basket.map
                    ((item, index) => <BasketItem
                        key={index}
                        item={item}
                        product={products.find(p => p.id == item.id)}
                    />)
            }
            <hr className='mt-5' />
            <div className='mt-3 text-end text-xl text-green-600'>Toplam: ${moneyFormat(total)}</div>
            <button
                onClick={resetBasket}
                className='bg-blue-400 
                text-gray-800
                        py-2
                        px-6 
                        rounded-sm 
                        hover:bg-blue-500 
                        hover:text-white'

            >Sepeti Sıfırla</button>
        </div>
    )
}

export default Basket