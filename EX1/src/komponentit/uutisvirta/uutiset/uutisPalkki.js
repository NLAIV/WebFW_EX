import React from 'react'
import Otsikko from './uutispalkki/Otsikko'
//import Uutinen from './uutispalkki/Uutinen'
import styles from './uutisPalkki.module.css'

export default function UutisPalkki() {
    return (
        <div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <img src='./kuva1.jpg' alt= "KUVA" width='624px' height='468px'></img>
                </div>
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe ='Consectetur | ' teksti = 'Quisque vulputate enim vel metus tincidunt, ac condimentum orci dapibus.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Integer 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Consectetur | ' teksti = 'Nulla imperdiet non dolor vel suscipit.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Malesuada 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Etiam | ' teksti = 'Quisque vulputate enim vel metus tincidunt, ac condimentum orci dapibus.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Velit 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <img src='./kuva2.jpg' alt= "KUVA" width='624px' height='468px'></img>
                </div>
                <div className = { styles.asettelu3 }>
                    <Otsikko  aihe = 'Aenean | ' teksti = 'Fusce volutpat metus a erat sodales auctor nec eget arcu.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Ac 10.33
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Aliquam | ' teksti = 'Pellentesque sit amet tellus non elit dignissim dignissim nec vitae nibh.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Integer 11.25
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Nullam | ' teksti = 'In hac habitasse platea dictumst, duis neque ligula, aliquam sit amet varius eget, pretium eget nunc.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Nunc 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Vestibulum | ' teksti = 'Quisque vulputate enim vel metus tincidunt, ac condimentum orci dapibus.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Suspendisse 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Vivamus | ' teksti = 'Curabitur a dictum felis, vel suscipit dolor, suspendisse nec fermentum sem.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Blandit 12.15
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <img src='./kuva3.jpg' alt= "KUVA" width='624px' height='468px'></img>
                </div>
                <div className = { styles.asettelu3 }>
                    <Otsikko  aihe = 'Sed | ' teksti = 'Nulla scelerisque libero in ultricies consequat.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        AC 22.45
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <img src='./kuva4.jpg' alt= "KUVA" width='624px' height='468px'></img>
                </div>
                <div className = { styles.asettelu3 }>
                    <Otsikko  aihe = 'Lorem | ' teksti = 'Suspendisse euismod, ex quis efficitur tempus, mauris mi efficitur tortor, id cursus purus mauris ut erat.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Sodales 15.13
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'At | ' teksti = 'Integer ante neque, pretium maximus ante et, pellentesque placerat elit.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Malesuada 05.05
                    </div>
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aihe ja teksti tälle tiilelle! */}
                <div className = { styles.asettelu3 }>
                    <Otsikko aihe = 'Mauris | ' teksti = 'In at maximus nulla, pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'></Otsikko>
                    <div className = { styles.asettelu5 }>
                        Vitae 14.15
                    </div>
                </div>
            </div>
        </div>
    )
}
