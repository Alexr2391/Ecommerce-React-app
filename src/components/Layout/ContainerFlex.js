import React from 'react'
import classes from './ContainerFlex.module.css'

const ContainerFlex = ({children}) => {
    return (
        <section className={classes.container_grid}>
            {children}
        </section>
    )
}

export default ContainerFlex
