import React from 'react'

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
            <div className="p-10 bg-white border-white border-solid mb-5">
                <img src={product.image} alt="" />
                <h6>{product.title}</h6>
                <div>$ {product.price}</div>
                <div className="actions">
                    <button
                        onClick={removeBasket}
                        disabled={basketItem === undefined}
                        className='
                        bg-gray-300 
                        w-20 
                        py-1 
                        rounded-sm 
                        hover:bg-gray-500 
                        hover:text-white
                        disabled:opacity-50 
                        disabled:cursor-default
                        ' >Azalt</button>
                    <span>{basketItem && basketItem.amount || 0}</span>
                    <button
                        onClick={addBasket}
                        disabled={total + product.price > money}
                        className='
                            bg-gray-300 
                            w-20 
                            py-1 
                            rounded-sm 
                            hover:bg-gray-500 
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