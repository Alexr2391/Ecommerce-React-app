import React from 'react'
import classes from './Wrapper.module.css'

const Wrapper = ({children}) => {
    return (
        <section className={classes.container}>
            {children}
        </section>
    )
}

export default Wrapper
