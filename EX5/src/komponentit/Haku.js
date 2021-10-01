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
                    <button className = { styles.asettelu3 } onClick = { () => props.hakumat('pla') }>pla</button>
                    <button className = { styles.asettelu3 } onClick = { () => props.hakumat('petg') }>petg</button>
                    <button className = { styles.asettelu3 } onClick = { () => props.hakumat('abs') }>abs</button>
                </div>
            </div>
            <div className = {styles.asettelu2}>
                <div>
                    Pikalinkit Väri
                </div>
                <div>
                    <button className = {styles.white} onClick = { () => props.hakuväri('white') }/>
                    <button className = {styles.black} onClick = { () => props.hakuväri('black') }/>
                    <button className = {styles.grey} onClick = { () => props.hakuväri('grey') }/>
                    <button className = {styles.transparent} onClick = { () => props.hakuväri('transparent') }/>
                    <button className = {styles.red} onClick = { () => props.hakuväri('red') }/>
                    <button className = {styles.green} onClick = { () => props.hakuväri('green') }/>
                    <button className = {styles.blue} onClick = { () => props.hakuväri('blue') }/>
                    <button className = {styles.yellow} onClick = { () => props.hakuväri('yellow') }/>
                </div>
            </div>
        </div>
    )
}

export default Haku