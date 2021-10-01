import React from 'react';
import styles from './App.module.css';
import Haku from './komponentit/Haku';
import Hakutulokset from './komponentit/hakutulokset';
import Yläpalkki from './komponentit/Yläpalkki';
import Ylläpitotyökalut from './komponentit/ylläpitotyökalut';
import Tuotteet from './komponentit/Tuotteet';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      /* Yhdistetyt haut, annetaan hakutuloksille... */
      hakutulokset: [],

      /* Tallennetut tuotteet, enemmällä kokemuksella nää varmaan kannattaas hakea tietokannasta tai jostain muualta... */
      filamentit: [
        {id: 1, mat: 'pla', col: 'red', img: './img/pla/red.png', desc: 'pla punainen', sDesc: 'Punainen PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 2, mat: 'pla', col: 'green', img: './img/pla/green.png', desc: 'pla vihreä', sDesc: 'Vihreä PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 3, mat: 'pla', col: 'blue', img: './img/pla/blue.png', desc: 'pla sininen', sDesc: 'Sininen PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 4, mat: 'pla', col: 'yellow', img: './img/pla/yellow.png', desc: 'pla keltainen', sDesc: 'Keltainen PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 5, mat: 'pla', col: 'black', img: './img/pla/black.png', desc: 'pla musta', sDesc: 'Musta PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 6, mat: 'pla', col: 'gray', img: './img/pla/gray.png', desc: 'pla harmaa', sDesc: 'Harmaa PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 7, mat: 'pla', col: 'white', img: './img/pla/white.png', desc: 'pla valkoinen', sDesc: 'Valkoinen PLA-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 8, mat: 'abs', col: 'red', img: './img/abs/red.png', desc: 'abs punainen', sDesc: 'Punainen ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 9, mat: 'abs', col: 'green', img: './img/abs/green.png', desc: 'abs vihreä', sDesc: 'Vihreä ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 10, mat: 'abs', col: 'blue', img: './img/abs/blue.png', desc: 'abs sininen', sDesc: 'Sininen ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 11, mat: 'abs', col: 'yellow', img: './img/abs/yellow.png', desc: 'abs keltainen', sDesc: 'Keltainen ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 12, mat: 'abs', col: 'black', img: './img/abs/black.png', desc: 'abs musta', sDesc: 'Musta ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 13, mat: 'abs', col: 'gray', img: './img/abs/gray.png', desc: 'abs harmaa', sDesc: 'Harmaa ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 14, mat: 'abs', col: 'white', img: './img/abs/white.png', desc: 'abs valkoinen', sDesc: 'Valkoinen ABS-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 15, mat: 'petg', col: 'black', img: './img/petg/black.png', desc: 'petg musta', sDesc: 'Musta PETG-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 16, mat: 'petg', col: 'blue', img: './img/petg/blue.png', desc: 'petg sininen', sDesc: 'Sininen PETG-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 17, mat: 'petg', col: 'clear', img: './img/petg/clear.png', desc: 'petg läpinäkyvä', sDesc: 'Läpinäkyvä PETG-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 18, mat: 'petg', col: 'red', img: './img/petg/red.png', desc: 'petg punainen', sDesc: 'Punainen PETG-muovi yleisrullassa 3D-tulostimeen...'},
        {id: 19, mat: 'petg', col: 'white', img: './img/petg/white.png', desc: 'petg valkoinen', sDesc: 'Valkoinen PETG-muovi yleisrullassa 3D-tulostimeen...'}
      ],
      admin: false,
      indexCount: 20,
      lisääFilamentti: {id: -1, mat: '', col: '', img: '',desc: 'null', sDesc: ''}
      //hakuSana: ''
    }
  }

  adminTogle = () => {
    let adminTemp;
    if(this.state.admin) {
      adminTemp = false;
    }
    else {
      adminTemp = true;
    }
    this.setState({
      admin: adminTemp
    })
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
  descSelect = (val) => {
    let lisFilTemp = this.state.lisääFilamentti;
    lisFilTemp.sDesc = val;
    this.setState({ lisääFilamentti: lisFilTemp });
    console.log(this.state.lisääFilamentti);
  }
  lisääFilamentti = () => {
    if(this.state.lisääFilamentti.mat !== '' &&
      this.state.lisääFilamentti.col !== '' &&
      this.state.lisääFilamentti.img !== '' &&
      this.state.lisääFilamentti.sDesc !== '')
      {
        /* Pitkä ehtolitania läpi? */
      
        //  Lisää uusi väliaikaiselle listalle...
      console.log(this.state.lisääFilamentti);
        //  ...Ja varsinaiselle listalle.
      this.setState({
        filamentit: [
          ...this.state.filamentit,
          {
            id: this.state.indexCount,
            mat: this.state.lisääFilamentti.mat,
            col: this.state.lisääFilamentti.col,
            img: this.state.lisääFilamentti.img,
            desc: 'null',
            sDesc: this.state.lisääFilamentti.sDesc
          }
        ],
        indexCount: this.state.indexCount+1,
        lisääFilamentti: {id: -1, mat: '', col: '', img: '',desc: 'null', sDesc: ''}
      })      
    }
    else {
      console.log("Tarkista kaikki kentät!")
    }
  }

  poista = (id) => {
    let filamentitTemp = [
      ...this.state.filamentit
    ]
    let index;
    for (let i = 0; i < filamentitTemp.length; i++) {
      if(filamentitTemp[i].id == id) {
        index = i;
        break;
      }
    }
    filamentitTemp.splice(index, 1);

    this.setState({
      filamentit: [
        ...filamentitTemp
      ]
    })
  }
  
  haku = (hakusana) => {
    /* Hakutapahtumakoodi */
    
    let hakuTemp = [];
    for (let i = 0; i < this.state.filamentit.length; i++)
    {
      if(this.state.filamentit[i].sDesc.toLowerCase().includes(hakusana.toLowerCase()))
      {
        hakuTemp = [
          ...hakuTemp,
          this.state.filamentit[i]
        ]
      }
    }
    this.setState({
      hakutulokset: [
        ...hakuTemp
      ]
    })   
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
              matSelect = { this.matSelect }
              colSelect = { this.colSelect }
              imgSelect = { this.imgSelect }
              descSelect = { this.descSelect }
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
