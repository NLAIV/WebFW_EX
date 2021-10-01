import React from 'react'
import styles from './yläotsikko.module.css'

export default function Yläotsikko(props) {
    return (
        <div className = { styles.yläotsikko }>
            <span>
                { props.aihe }
            </span>
            <span>
                { props.teksti }
            </span>
        </div>
    )
}
