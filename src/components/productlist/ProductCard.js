import React, {useState, useContext} from 'react'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classes from './ProductCard.module.css'
import Skeleton from '@material-ui/lab/Skeleton';
import PriceTag from './PriceTag'
import ButtonCart from '../ui/ButtonCart'
import CartContext from '../store/CartContext'

const ProductCard = (props) => {

    const cartCtx = useContext(CartContext)
    const [isLoaded, setIsLoaded] = useState(false)

    const addToCart = () => {
        cartCtx.addItem(props)
    }

    return (
        <LazyLoadComponent
        afterLoad={()=>setIsLoaded(true)}
        
        >
            {isLoaded ? 
                <div className={classes.container} key={props.id}>
                    <PriceTag price={props.price} />
                    <div className={classes.image_wrapper}>
                        <LazyLoadImage
                        className={classes.image}
                        src={props.src} 
                        effect='blur'
                        alt={props.title} /> 
                    </div>
                    <div className={classes.title_container}>
                        <h4 className={classes.title}>{props.title}</h4>
                    </div>
                    {/* <div>{props.description}</div>  */}
                    <ButtonCart onClick={addToCart} text="Add to Cart"/>
                </div> 
                : <Skeleton animation="wave" variant="rect" width={500} height={200}/>
            }
        </LazyLoadComponent>
    )
}

export default ProductCard
