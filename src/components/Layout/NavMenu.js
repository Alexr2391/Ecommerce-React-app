import React,{ useContext } from 'react'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled, {keyframes} from 'styled-components'
import CartContext from '../store/CartContext'

const NavMenu = () => {

    const cartCtx = useContext(CartContext)

    return (
        <ShoppingBadge>
            <IconButton>
                {cartCtx.cartItems > 0 ? 
                <AddedToCartBadge>
                    {cartCtx.cartItems}
                </AddedToCartBadge>
                : ''
                }
                <ShoppingCartIcon style={{color: 'white'}} fontSize="large"/>
            </IconButton>
        </ShoppingBadge>
    )
}

const ShoppingBadge = styled.div`
    margin-right: 2rem;
    position: relative;
`

const animate = keyframes`
    0% {transform : scale(1.3)}
    100% {transform : scale(1)}
`  

const AddedToCartBadge =  styled.div`
    z-index: 4;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    background-color: red;
    right: .2rem;
    border: .1rem solid white;
    pointer-events: none;
    color: #fff;
    font-weight: bold;
    font-size: .9rem;
    display:flex;
    align-items: center;
    justify-content: center;
    animation : ${animate} .3s ease-in-out
`



export default NavMenu
