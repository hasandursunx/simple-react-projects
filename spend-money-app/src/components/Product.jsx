import React from 'react'
import { moneyFormat } from "../helpers"


function Product({ product, basket, setBasket, money, total }) {

    const basketItem = basket.find(item => item.id === product.id);
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket], checkBasket)
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket && checkBasket.amount > 1) {
            checkBasket.amount -= 1;
            setBasket([...basket], checkBasket)
        } else {
            setBasket(basket.filter(item => item.id !== product.id))
        }
    }

    return (
        <>
            <div className="p-10 bg-white border-white border-solid">
                <img className='w-[200px] h-[200px] mb-4' src={product.image} alt="" />
                <h6 className='text-xl font-semibold'>{product.title}</h6>
                <div className='text-xl text-green-500 mb-5 '>$ {product.price}</div>
                <div className="actions">
                    <button
                        onClick={removeBasket}
                        disabled={basketItem === undefined}
                        className='
                      bg-blue-400 
                      text-gray-800
                        w-20 
                        py-1 
                        rounded-sm 
                        hover:bg-blue-500 
                        hover:text-white
                        disabled:opacity-50 
                        disabled:cursor-default
                        ' >Azalt</button>
                    <span className='mx-4'>{basketItem && basketItem.amount || 0}</span>
                    <button
                        onClick={addBasket}
                        disabled={total + product.price > money}
                        className='
                            bg-blue-400 
                            text-gray-800
                            w-20 
                            py-1 
                            rounded-sm 
                            hover:bg-blue-500 
                            hover:text-white
                            disabled:opacity-50 
                            disabled:cursor-default
                            '
                    >Arttır</button>
                </div>
            </div >
        </>
    )
}

export default Product