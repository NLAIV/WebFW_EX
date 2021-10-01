import React from 'react'
import styles from './alapalkki.module.css'
import Alanavi from './alanavi/alanavi'
import Alapää from './alapää/Alapää'

export default function Alapalkki() {
    return (
        <div className = { styles.asettelu1 }>
            <div className = { styles.asettelu2 }>
                <Alanavi></Alanavi>
            </div>
            <div className = { styles.asettelu3 }>
                <Alapää></Alapää>
            </div>
        </div>
    )
}
