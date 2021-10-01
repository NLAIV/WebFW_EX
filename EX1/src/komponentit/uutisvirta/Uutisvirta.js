import React from 'react'
import Yläotsikko from './yläotsikot/Yläotsikko'
import SivuPalkki from './uutiset/sivuPalkki'
import UutisPalkki from './uutiset/uutisPalkki'
import styles from './uutisvirta.module.css'

export default function Uutisvirta() {
    return (
        <div>
            <div className = { styles.asettelu1 }>
                <div className = { styles.asettelu2 }>
                    {/* TODO ADVANCED Hae aihe ja otsikko randomgeneraattorilla kansiosta DATA id-numeroilla, palauta tänne vastaavat tekstit*/}
                    <Yläotsikko aihe = 'VELIT:' teksti = 'Donec molestie neque eget ligula lacinia consectetur.'></Yläotsikko>
                </div>
                <div className = { styles.asettelu2 }>
                    <Yläotsikko aihe = 'AC: ' teksti = 'Praesent tempor accumsan velit, sit amet interdum urna malesuada sed.'></Yläotsikko>
                </div>
            </div>
            <div>
                <div className = { styles.asettelu3 }>
                    <div className = { styles.asettelu4 }>
                        <div className = { styles.uutispalkki }>
                            <UutisPalkki></UutisPalkki>
                        </div>
                        <div className = { styles.sivupalkki }>
                            <SivuPalkki></SivuPalkki>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
