import React from 'react'
import styles from './uutinen.module.css'

export default function Otsikko(props) {
    return (
        <div>
            {/* TODO Otsikoiden valinta parametrillä type */}
            <span className = { styles.asettelu1 }>
                {props.aihe}
            </span>
            <span>
                {props.teksti}
            </span>
        </div>
    )
}
