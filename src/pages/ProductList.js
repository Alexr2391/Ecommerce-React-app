import React, {useEffect, useState} from 'react'
import ProductArea from '../components/productlist/ProductArea'
import ContainerFlex from '../components/Layout/ContainerFlex'
import axios from 'axios'
import FilterArea from '../components/filters/FilterArea'

const ProductList = () => {

    const [getProducts, setGetProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

useEffect(() => {

    (async() => {
        setIsLoading(true)
        const {data} = await axios({
            method: 'GET', 
            url: 'https://fakestoreapi.com/products',
            params :{
                limit : 20
            }
        })

        if(data) {
            console.log(data)
            setIsLoading(false) 
            setGetProducts([...data])
        }
    })()

}, [])

    if(isLoading) {
        return <div>...Loading</div>
    }

    return (
        <ContainerFlex>
            <FilterArea />
            <ProductArea items={getProducts} />
        </ContainerFlex>
    )
}

export default ProductList
