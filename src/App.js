import React from 'react'
import ProductList from './pages/ProductList'
import HomePage from './pages/HomePage'
import Navigation from './components/Layout/NavigationMenu'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
        <Navigation />
        <Switch>
            <Route path="/" exact>
                    <HomePage />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
        </Switch>
        </>
    )
}

export default App
