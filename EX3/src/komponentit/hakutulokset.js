import Hakutulos from "./Hakutulos"
import styles from './Hakutulokset.module.css'
import HakutulosAdmin from "./HakutulosAdmin"

const Hakutulokset = props => {
    return (
        <div>
            <div className = { styles.asettelu1 }>
                {
                    props.tulokset.map(element => <Hakutulos {...element} key = {element.id}/>)
                }             
            </div>
        </div>
    )     
}

export default Hakutulokset