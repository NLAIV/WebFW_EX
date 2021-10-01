import React from 'react'
import styles from './otsikko.module.css'

const Otsikko = props => {
    return (
        <div className = { styles.asettelu1 }>
            <h1 className = { styles.asettelu2 }>
                {props.appName}
            </h1>
            <div className = { styles.asettelu3 }>
                {props.appDate}
            </div>
        </div>
    )
}
export default Otsikko
