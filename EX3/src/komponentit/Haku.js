import React from 'react'
import styles from './Haku.module.css'

const Haku = props => {
    return (
        <div className = {styles.asettelu1}>
            <div className = {styles.asettelu2}>
                <div>
                    Haku:
                </div>
                <div>
                    <form>
                        <input
                            type = 'text'
                            //name = 'hakukenttä'
                            placeholder = 'hakusana'
                            onChange = { (event) => props.haku(event.target.value) }
                        />
                    </form>
                </div>
            </div>
            <div className = {styles.asettelu2}>
                <div>
                    Pikalinkit Materiaali:
                </div>
                <div>
                    <button className = { styles.asettelu3 } onClick = { () => props.haku('pla') }>pla</button>
                    <button className = { styles.asettelu3 } onClick = { () => props.haku('petg') }>petg</button>
                    <button className = { styles.asettelu3 } onClick = { () => props.haku('abs') }>abs</button>
                </div>
            </div>
            <div className = {styles.asettelu2}>
                <div>
                    Pikalinkit Väri
                </div>
                <div>
                    <button className = {styles.white} onClick = { () => props.haku('valkoinen') }/>
                    <button className = {styles.black} onClick = { () => props.haku('musta') }/>
                    <button className = {styles.grey} onClick = { () => props.haku('harmaa') }/>
                    <button className = {styles.transparent} onClick = { () => props.haku('läpinäkyvä') }/>
                    <button className = {styles.red} onClick = { () => props.haku('punainen') }/>
                    <button className = {styles.green} onClick = { () => props.haku('vihreä') }/>
                    <button className = {styles.blue} onClick = { () => props.haku('sininen') }/>
                    <button className = {styles.yellow} onClick = { () => props.haku('keltainen') }/>
                </div>
            </div>
        </div>
    )
}

export default Haku