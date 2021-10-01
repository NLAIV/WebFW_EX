import React from 'react'
import styles from './ylläpitotyökalut.module.css'

const Ylläpitotyökalut = props => {
    return (
        <div className = { styles.asettelu1 }>
            <div>
              Add New Item
              <div>
                Materiaali:
                <select onChange = { (event) => props.matSelect(event.target.value) }>
                    <option value = "pla">PLA</option>
                    <option value = "abs">ABS</option>
                    <option value = "petg">PETG</option>
                </select>
              </div>
              <div>
                Väri:
                <select onChange = { (event) => props.colSelect(event.target.value) }>
                    <option value = "red">Punainen</option>
                    <option value = "green">Vihreä</option>
                    <option value = "blue">Sininen</option>
                    <option value = "yellow">Keltainen</option>
                    <option value = "black">Musta</option>
                    <option value = "gray">Harmaa</option>
                    <option value = "white">Valkoinen</option>
                    <option value = "transparent">Läpinäkyvä</option>
                </select>
              </div>
              <div>
                Kuva:
                <input
                  type = 'text'
                  placeholder = "Tiedostopolku"
                  onChange = { (event) => props.imgSelect(event.target.value) }
                />
              </div>
              <div>
                Tuoteseloste:
                <input
                  type = 'text'
                  placeholder = "Selite"
                  onChange = { (event) => props.descSelect(event.target.value) }
                />
              </div>
              <div>
                    <button 
                        onClick = { () => props.lisääFilamentti() }
                    >
                        Lisää
                    </button>
              </div>
            </div>
            <div>
                Delete Item
                <div>
                    ID:
                    <select>

                    </select>
                </div>
                <button>Poista</button>
            </div>
        </div>
    )
}

export default Ylläpitotyökalut
