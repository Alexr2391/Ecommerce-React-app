import React from 'react'
import ProductCard from './ProductCard'
import classes from './ProductArea.module.css'
import Wrapper from '../Layout/Wrapper'


const ProductArea = ({items}) => {
    return (
        <Wrapper>
            {items && items.map((productCard) => {
                return(
                <ProductCard 
                key={productCard.id}
                title={productCard.title}
                src={productCard.image}
                description={productCard.description}
                price={productCard.price}
                />
                )}
            )}
        </Wrapper>
    )
}

export default ProductArea
