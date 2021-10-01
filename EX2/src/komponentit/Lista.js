import React from 'react'
import ListaTavara from './ListaTavara'
import styles from './lista.module.css'

const Lista = props => {
    return (
        <div>
            <ul className = { styles.asettelu1 }>
                {
                    props.tavarat.map(element => <ListaTavara {...element} poista = { props.poista } key = {element.id}/>)
                }             
            </ul>
        </div>
    )
}

export default Lista
