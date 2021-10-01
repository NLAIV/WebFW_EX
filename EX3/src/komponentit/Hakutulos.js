import React from 'react'
import styles from './Hakutulos.module.css'

const Hakutulos = props => {
    return (
        <div className = {styles.asettelu1}>
            <div>
                <img src = {props.img} alt = 'KUVA' height = '200px' width = '200px' />
            </div>
            <div>
                {props.sDesc}
            </div>

        </div>
    )
}

export default Hakutulos
