import React from 'react'
import classes from './NavigationMenu.module.css'
import NavMenu from './NavMenu'

const NavigationMenu = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navbar_fixed}>
                <NavMenu />
            </nav>
        </header>
    )
}

export default NavigationMenu
