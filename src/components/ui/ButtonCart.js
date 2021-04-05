import React from 'react'
import classes from './ButtonCart.module.css'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ButtonCart = (props) => {


    return (
        <div className={classes.outer_button}>

        <Button
        variant="contained"
        color="secondary"
        className={classes.main_button}
        onClick={props.onClick}
        startIcon={<AddShoppingCartIcon />}
        >{props.text}
      </Button>

        </div>
    )
}

export default ButtonCart
