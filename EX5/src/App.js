import React from 'react';
import styles from './App.module.css';
import Haku from './komponentit/Haku';
import Hakutulokset from './komponentit/hakutulokset';
import Yläpalkki from './komponentit/Yläpalkki';
import Ylläpitotyökalut from './komponentit/ylläpitotyökalut';
import Tuotteet from './komponentit/Tuotteet';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      /* Yhdistetyt haut, annetaan hakutuloksille... */
      hakutulokset: [],

      /* Tallennetut tuotteet, enemmällä kokemuksella nää varmaan kannattaas hakea tietokannasta tai jostain muualta... */
      filamentit: [],
      admin: false,
      lisääFilamentti: {id: -1, manf: '', mat: '', col: '', img: '', price: 0 ,desc: '', sDesc: ''}
      //hakuSana: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:4000/filaments")
    .then(response => {
      console.log(response);
      let filamentitTemp = [...response.data]
      this.setState({
        hakutulokset: filamentitTemp
      })
    })
    .catch(err => console.log(err));
  }

  adminTogle = () => {
    axios.put("http://localhost:4000/admin", {passwd: '12345'})
    .then(response => {
      console.log(response)
      let adminTemp;
      if(response.data === "Admin User") {
        adminTemp = true;
        axios.get("http://localhost:4000/filaments")
        .then(response => {
          console.log(response);
          let filamentitTemp = [...response.data]
          this.setState({
            filamentit: filamentitTemp
          })
        })
        .catch(err => console.log(err));
      }
      else {
        adminTemp = false;
        axios.get("http://localhost:4000/filaments")
        .then(response => {
          console.log(response);
          let filamentitTemp = [...response.data]
          this.setState({
            hakutulokset: filamentitTemp
          })
        })
        .catch(err => console.log(err));
      }
      this.setState({
        admin: adminTemp
      })
    })
    .catch(err => console.log(err));
    
  }

  manfSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.manf = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  matSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.mat = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  colSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.col = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  imgSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.img = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  priceSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    //  Ei laiteta negatiivista hintaa...
    if(val > 0) {
      lisFilTemp.price = val;
    }
    else {
      lisFilTemp.price = val * -1;
    }
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  descSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.desc = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  sDescSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.sDesc = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  lisääFilamentti = () => {
    if(this.state.lisääFilamentti.manf !== '' &&
        this.state.lisääFilamentti.mat !== '' &&
        this.state.lisääFilamentti.col !== '' &&
        this.state.lisääFilamentti.img !== '' &&
        this.state.lisääFilamentti.price !== 0 &&
        this.state.lisääFilamentti.price !== '' &&
        this.state.lisääFilamentti.desc !== '' &&
        this.state.lisääFilamentti.sDesc !== '') {
      /* Pitkä ehtolitania läpi? */
      console.log(this.state.lisääFilamentti);
      //  ...Ja varsinaiselle listalle.
      axios.post('http://localhost:4000/newFilament',
        {
          manf: this.state.lisääFilamentti.manf,
          mat: this.state.lisääFilamentti.mat,
          col: this.state.lisääFilamentti.col,
          img: this.state.lisääFilamentti.img,
          price: this.state.lisääFilamentti.price,
          desc: this.state.lisääFilamentti.desc,
          sDesc: this.state.lisääFilamentti.sDesc
        }
      )
      .then(response => {
        console.log(response);
        this.setState({lisääFilamentti: {manf: '', mat: '', col: '', img: '', price: 0, desc: '', sDesc: ''}});
        axios.get("http://localhost:4000/filaments")
        .then(response => {
          console.log(response);
          let filamentitTemp = [...response.data]
          this.setState({
            filamentit: filamentitTemp
          })
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
      
            
    }
    else {
      console.log("Tarkista kaikki kentät!")
    }
  }

  poista = (id) => {
    axios.delete("http://localhost:4000/filaments/" + id)
    .then(response => {
      console.log(response);
      axios.get("http://localhost:4000/filaments")
      .then(response => {
        console.log(response);
        let filamentitTemp = [...response.data]
        this.setState({
          filamentit: filamentitTemp
        })
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err)); 
  }
  
  haku = (hakusana) => {
    /* Hakutapahtumakoodi */
    if(hakusana !== '') {
      axios.get("http://localhost:4000/filaments/search/" + hakusana)
      .then(response => {
        console.log(response);
        let filamentitTemp = [...response.data]
        this.setState({
          hakutulokset: filamentitTemp
        })
      })
      .catch(err => console.log(err));
    }
    else {
      axios.get("http://localhost:4000/filaments")
      .then(response => {
        console.log(response);
        let filamentitTemp = [...response.data]
        this.setState({
          hakutulokset: filamentitTemp
        })
      })
      .catch(err => console.log(err));
    } 
  }
  hakuväri = (väri) => {
    /* Hakutapahtumakoodi */
    axios.get("http://localhost:4000/filaments/col/" + väri)
    .then(response => {
      console.log(response);
      let filamentitTemp = [...response.data]
      this.setState({
        hakutulokset: filamentitTemp
      })
    })
    .catch(err => console.log(err));   
  }
  hakumat = (materiaali) => {
    /* Hakutapahtumakoodi */
    axios.get("http://localhost:4000/filaments/mat/" + materiaali)
    .then(response => {
      console.log(response);
      let filamentitTemp = [...response.data]
      this.setState({
        hakutulokset: filamentitTemp
      })
    })
    .catch(err => console.log(err));    
  }


  render ()
  {
    if(this.state.admin) {
      return(
        <div className = { styles.asettelu1 }>
          <div>
            <Yläpalkki
              adminToggle = { this.adminTogle }
            />
          </div>
          <div className = { styles.asettelu2 }>
            <Ylläpitotyökalut
              manfSelect = { this.manfSelect }
              matSelect = { this.matSelect }
              colSelect = { this.colSelect }
              imgSelect = { this.imgSelect }
              priceSelect = { this.priceSelect }
              descSelect = { this.descSelect }
              sDescSelect = { this.sDescSelect }
              lisääFilamentti = { this.lisääFilamentti }
            />
            <div>
              <Tuotteet
                admin = { this.state.admin }
                tuotteet = { this.state.filamentit }
                poista = { this.poista } 
              />
            </div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className = { styles.asettelu1 }>
          <div>
            <Yläpalkki
              adminToggle = { this.adminTogle }
            />
          </div>
          <div className = { styles.asettelu2 }>
            <div>
              <Haku
                haku = { this.haku }
                hakumat = { this.hakumat }
                hakuväri = { this.hakuväri }
              />
            </div>
            <div>
              <Hakutulokset
                tulokset = { this.state.hakutulokset } 
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;
