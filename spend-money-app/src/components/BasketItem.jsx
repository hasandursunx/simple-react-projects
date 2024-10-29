import React from 'react'

function BasketItem({ item, product }) {
    return (
        <div className='text-lg'>
            {product.title} x {item.amount}
        </div>
    )
}

export default BasketItem