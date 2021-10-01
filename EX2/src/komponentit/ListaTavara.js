import React from 'react'
import styles from './ListaTavara.module.css'

const ListaTavara = props => {
    return (
        <li className = { styles.asettelu1 }>
            <div className = { styles.asettelu2 }>
                {props.arvo}
            </div>
            <div>
                {props.määrä}
            </div>
            <div>
                {props.yksikkö}
            </div>
            <div className = { styles.asettelu3 }>
                <button onClick = { () => props.poista(props.id) }>Poista</button>
            </div>
        </li>
    )
}

export default ListaTavara
