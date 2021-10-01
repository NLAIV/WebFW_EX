import React from 'react'
import styles from './sivuuutinen.module.css'
export default function SivuUutinen(props) {
    return (
        <div >
            {/* TODO ADVANCED Muuttujina aihe (type) ja uutisteksti (id), toteutu miten? */}
            <span className = { styles.asettelu1 }>
                {props.aihe}
            </span>
            <span>
                {props.teksti}
            </span>
        </div>
    )
}
