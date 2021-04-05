import React from 'react'
import classes from './PriceTag.module.css'

const PriceTag = (props) => {
    return (
        <div className={classes.pricebox}>
            <div className={classes.pricetag}>{props.price} €</div>
        </div>
    )
}

export default PriceTag
