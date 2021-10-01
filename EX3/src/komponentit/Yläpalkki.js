import React from 'react'
import styles from './Yläpalkki.module.css'

const Yläpalkki = props => {
    return (
        <div className = {styles.asettelu1}>
            <div className = {styles.asettelu2}>
                <div className = {styles.asettelu3}>
                    <div>
                        <img src = './filamenttivarasto.svg' alt = 'Filamenttivarasto' height = '31px' width = '417' /> 
                    </div>
                    <div>
                        <button className = { styles.asettelu4 } onClick = { () => props.adminToggle() } >Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yläpalkki
