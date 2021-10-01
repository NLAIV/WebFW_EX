import React from 'react'
import styles from './Tausta.module.css'
import Yläpalkki from './yläpalkki/Yläpalkki'
import Uutisvirta from './uutisvirta/Uutisvirta'
import Alapalkki from './Alapalkki/Alapalkki'


export default function Tausta() {
    return (
        <div className = { styles.Tausta }>
            <div>
                <Yläpalkki></Yläpalkki>
            </div>
            <div>
                <Uutisvirta></Uutisvirta>
            </div>
            <div>
                <Alapalkki></Alapalkki>
            </div>
        </div>
    )
}
