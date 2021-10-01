import React from 'react'
import styles from './uutinen.module.css'

export default function Uutinen(props) {
    return (
        <div>
            {/* TODO Uutistekstin valinta parametreilla type (Ota tämä edelliseltä askeleelta!) ja id*/}
            <span className = { styles.asettelu1 }>
                {props.aihe}
            </span>
            <span>
                {props.teksti}
            </span>
        </div>
    )
}
