import React from 'react'
import styles from './navi.module.css'

export default function navi() {
    return (
        <div className = { styles.asettelu1 }>
            <div className = { styles.asettelu2 }>
                <div className = { styles.asettelu3 }>
                    {/* TODO Aihelinkkien valinta parametreillä? */}
                    <div className = { styles.tyyppi1 }>
                        Etusivu
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Integer
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Velit
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Massa
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Malesuada 
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Ac 
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Blandit 
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Vitae
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Sodales 
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Suspendisse 
                    </div>
                    <div className = { styles.tyyppi2 }>
                        Nunc 
                    </div>
                </div>
            </div>
        </div>
    )
}
