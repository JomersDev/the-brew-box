import React, { useState, createContext } from "react";
import products from "../data";

export const ShopContext = createContext(null)

{/* create default state of cart object - this allows us to update the products data array and not have to update the way state is initialised*/}
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const  ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find(product => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        console.log(itemId)
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue ={ cartItems, addToCart, removeFromCart, getTotalCartAmount }

    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}