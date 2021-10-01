import React from 'react'
//import styles from './sivuotsikko.module.css'

export default function SivuOtsikko(props) {
    return (
        <div> 
            {/* TODO ADVANCED Muuttujana aihe (tyyppi-id) */}
            { props.aihe }
        </div>
    )
}
