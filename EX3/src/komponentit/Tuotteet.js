import styles from './Hakutulokset.module.css'
import HakutulosAdmin from "./HakutulosAdmin"

const Tuotteet = props => {
    return (
        <div>
            <div className = { styles.asettelu1 }>
                {
                    props.tuotteet.map(element =>
                        <HakutulosAdmin 
                            poista = { props.poista }
                            {...element} key = {element.id}
                        />)
                }             
            </div>
        </div>
    )     
}

export default Tuotteet