import React from 'react'
import styles from './Alapää.module.css'

export default function Alapää() {
    return (
        <div>           
            <div className = { styles.asettelu1 }>
                <div>
                    Käyttöehdot
                </div>
                <div>
                    Tietosuoja
                </div>
                <div>
                    Evästeet
                </div>
                <div>
                    Mainokset
                </div>
            </div>
            <div className = { styles.asettelu2 }>
                <img src = './NameBlack.svg' alt = "HÖLMÖLÄN SANOMAT" width = '250px' height = '22px'></img>    
            </div>
            <div className = { styles.asettelu3 }>
                somelogot etc.   
            </div>      
        </div>
    )
}
