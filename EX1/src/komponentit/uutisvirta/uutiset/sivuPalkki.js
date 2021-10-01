import React from 'react'
import SivuOtsikko from './sivupalkki/sivuOtsikko'
import SivuUutinen from './sivupalkki/sivuUutinen'
import styles from './sivuPalkki.module.css'

export default function SivuPalkki() {
    return (
        <div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aiherajaus tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <SivuOtsikko aihe = 'Luetuimmat'></SivuOtsikko>
                </div>
                <ol className = { styles.asettelu5 }>
                    <li className = { styles.asettelu6 }>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Pellentesque | ' teksti = 'Proin vestibulum ullamcorper dolor, ut rutrum risus bibendum sit amet.'></SivuUutinen>
                        </div>
                    </li>
                    <li className = { styles.asettelu6 }>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Efficitur | ' teksti = 'Vestibulum non vulputate magna, id ultricies urna.'></SivuUutinen>
                        </div>
                    </li>
                    <li className = { styles.asettelu6 }>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Eu | ' teksti = 'Mauris luctus dui ut molestie tempus.'></SivuUutinen>
                        </div>
                    </li>
                </ol>
                <div className = { styles.asettelu4 }>
                    Näytä Lisää
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aiherajaus tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <SivuOtsikko aihe = 'Uusimmat'></SivuOtsikko>
                </div>
                <ol className = { styles.asettelu5 }>
                    <li className = { styles.asettelu7 }>
                        <div className = { styles.asettelu8 }>
                            10.15
                        </div>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Libero | ' teksti = 'Etiam tempus nisi nec risus bibendum congue et ac sem.'></SivuUutinen>
                        </div>
                    </li>
                    <li className = { styles.asettelu7 }>
                        <div className = { styles.asettelu8 }>
                            08.30
                        </div>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Ut | ' teksti = 'Curabitur vulputate augue enim, vitae tincidunt felis ultricies at.'></SivuUutinen>
                        </div>
                    </li>
                    <li className = { styles.asettelu7 }>
                        <div className = { styles.asettelu8 }>
                            07.45
                        </div>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Mollis | ' teksti = 'Phasellus vitae facilisis magna, eget vulputate ante.'></SivuUutinen>
                        </div>
                    </li>
                    <li className = { styles.asettelu7 }>
                        <div className = { styles.asettelu8 }>
                            07.00
                        </div>
                        <div className = { styles.asettelu3 }>
                            <SivuUutinen aihe = 'Amet | ' teksti = 'Maecenas iaculis congue auctor.'></SivuUutinen>
                        </div>
                    </li>
                </ol>
                <div className = { styles.asettelu4 }>
                    Näytä Lisää
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aiherajaus tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <SivuOtsikko aihe = 'Morbi'></SivuOtsikko>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'At | ' teksti = 'Maecenas aliquet accumsan dolor, eu iaculis orci venenatis vel.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'Sollicitudin | ' teksti = 'Donec in consequat felis.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu4 }>
                    Näytä Lisää
                </div>
            </div>
            <div className = { styles.asettelu1 }>
                {/* TODO ADVANCED: Kutsu Randomgeneraattorilla aiherajaus tälle tiilelle! */}
                <div className = { styles.asettelu2 }>
                    <SivuOtsikko aihe = 'Condimentum'></SivuOtsikko>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'Nisi | ' teksti = 'Donec id libero nec nulla ultricies tincidunt non eu ipsum.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'Justo | ' teksti = 'Donec malesuada vitae orci sit amet dapibus.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'Fringilla | ' teksti = 'Curabitur id rhoncus odio.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu9 }>
                    <SivuUutinen aihe = 'Quis | ' teksti = 'Aenean eros leo, vestibulum vitae malesuada vitae, gravida non lectus.'></SivuUutinen>
                </div>
                <div className = { styles.asettelu4 }>
                    Näytä Lisää
                </div>
            </div>
        </div>
    )
}
