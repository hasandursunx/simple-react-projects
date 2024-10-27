import React from 'react'

function Product({ product, basket, setBasket }) {

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

    }

    return (
        <>
            <div className="p-10 bg-white border-white border-solid mb-5">
                <h6>{product.title}</h6>
                <div>$ {product.price}</div>
                <div className="actions">
                    <button onClick={removeBasket} className='bg-gray-300 w-20 py-1 rounded-sm hover:bg-gray-500 hover:text-white' >Azalt</button>
                    <span>{basketItem && basketItem.amount || 0}</span>
                    <button
                        onClick={addBasket}
                        className='
                            bg-gray-300 
                            w-20 
                            py-1 
                            rounded-sm 
                            hover:bg-gray-500 
                            hover:text-white'
                    >Arttır</button>
                </div>
            </div >
        </>
    )
}

export default Product