import React from 'react'
import styles from './Pää.module.css'

export default function Pää() {
    return (
        <div className = { styles.asettelu1 }>           
            <div className = { styles.asettelu2 }>
                <div className = { styles.asettelu3 }>
                    <div className = { styles.asettelu4 }>
                        <div className = { styles.lehti }>
                            <img src='./NameWhite.svg' alt = "HÖLMÖLÄN SANOMAT" height = '24px' width = '273px'></img>
                        </div>
                        <div className = { styles.uutiset }>Uutiset</div>
                        <div>Lehdet</div>
                    </div>
                    <div className = { styles.asettelu5 }>
                        <div className = { styles.tilaa }>Tilaa</div>
                        <div className = { styles.kirjaudu }>
                            <div>Kirjaudu </div>
                            <img src='./LogLogo.svg' alt = "" height = '24px' width = '24px'></img>
                        </div>
                        <div className = { styles.hae }>
                            <div>Hae </div>
                            <img src='./SearchLogo.svg' alt = "" height = '24px' width = '24px'></img>
                        </div>
                        <div className = { styles.valikko }>
                            <div>Valikko </div>
                            <img src='./MenuLogo.svg' alt = "" height = '24px' width = '24px'></img> 
                        </div> 
                    </div>
                </div>
            </div>          
        </div>
    )
}
