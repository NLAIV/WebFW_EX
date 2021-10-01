import React from 'react'
import styles from './nappi.module.css'

const Nappi = props => {
    return (
        <div>
            {/* Kun nää oli niin helppoa lisätä, ni haittaaks se? */}
            <div className = { styles.asettelu1 }>
                <div>
                    <button  onClick = { () => props.lisää(1) }>Lisää Maitoo!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(2) }>Lisää Pottuja!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(3) }>Lisää Porkkanoi!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(4) }>Lisää munii!</button>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                <div>
                    <button onClick = { () => props.lisää(5) }>Lisää Leipää!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(6) }>Lisää Voita!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(7) }>Lisää Juustoo!</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää(8) }>Lisää Kinkkuu!</button>
                </div>
            </div>
        </div>
    )
}
export default Nappi

/*  Elä keuli, nää tulee vasta myöhemmin...
            <div>
                Edistyneet napit:
            </div>
            <div className = { styles.asettelu1 }>
                <div>
                    <button onClick = { () => props.tuote() }>{props.n1}</button>
                </div>
                <div>
                    <button onClick = { () => props.määrä() }>{props.n2}</button>
                </div>
                <div>
                    <button onClick = { () => props.lisää() }>Lisää!</button>
                </div>
                <div>
                    <button onClick = { () => props.poista() }>Poista!</button>
                </div>
            </div>
*/