import { createContext, useState } from 'react'

const CartContext = createContext({
    cartItems: 0,
    products: [],
    addItem : (itemid) => {}, 
    removeItem : (itemId) => {}

})


export const CartContextProvider = (props) => {
    const [productsInCart, setProductsInCart] = useState([])

    const addItemInCart = (additem) => {
        setProductsInCart((previousCartState) =>{
            return previousCartState.concat(additem)
        })
    }

    const removeItemFromCart = (removeItemId) => {
        setProductsInCart((previousCartState) => {
            return previousCartState.filter(itemid => itemid !== removeItemId)
        })
    }

    const context = {
        products : productsInCart,
        cartItems: productsInCart.length,
        addItem : addItemInCart,
        removeItem : removeItemFromCart
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
        )
} 

export default CartContext