import React from 'react'
import styles from './ylläpitotyökalut.module.css'

const Ylläpitotyökalut = props => {
    return (
        <div className = { styles.asettelu1 }>
          <div>
            Lisää uusi Tuote
            <div>
              <input
                type = 'text'
                placeholder = "Valmistaja"
                onChange = { (event) => props.manfSelect(event.target.value) }
              />
            </div>
            <div>
              <select onChange = { (event) => props.matSelect(event.target.value) }>
                <option value = "">Valitse materiaali</option>
                <option value = "pla">PLA</option>
                <option value = "abs">ABS</option>
                <option value = "petg">PETG</option>
              </select>
            </div>
            <div>
              <select onChange = { (event) => props.colSelect(event.target.value) }>
                <option value = "">Valitse väri</option>
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
              <input
                type = 'text'
                placeholder = "Kuvan url"
                onChange = { (event) => props.imgSelect(event.target.value) }
              />
              Esimerkki: "./img/pla_red.png"
            </div>
            <div>
              <input
                type = 'number'
                placeholder = "Hinta"
                onChange = { (event) => props.priceSelect(event.target.value) }
              />
            </div>
            <div>
              <input
                type = 'text'
                placeholder = "Tuotekuvaus"
                onChange = { (event) => props.descSelect(event.target.value) }
              />
            </div>
            <div>
              <input
                type = 'text'
                placeholder = "Valikko-otsikko"
                onChange = { (event) => props.sDescSelect(event.target.value) }
              />
            </div>
            <div>
              <button onClick = { () => props.lisääFilamentti() }>
                  Lisää
              </button>
            </div>
          </div>
        </div>
    )
}

export default Ylläpitotyökalut
