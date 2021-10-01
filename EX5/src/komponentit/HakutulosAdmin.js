import React from 'react'
import styles from './Hakutulos.module.css'

const HakutulosAdmin = props => {
    return (
        <div className = {styles.asettelu1}>
            <div>
                <img src = {props.img} alt = 'KUVA' height = '200px' width = '200px' />
            </div>
            <div>
                {props.sDesc}
            </div>
            <div>
                <button onClick = { () => props.poista(props.id) }>Poista</button>
            </div>

        </div>
    )
}

export default HakutulosAdmin