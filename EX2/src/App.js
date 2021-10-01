import React from "react"
import Otsikko from './komponentit/Otsikko'
import Lista from './komponentit/Lista'
import Nappi from './komponentit/Nappi'
import styles from './App.module.css'


class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      tavarat: [
        { id: 1, arvo: 'Maitoa', määrä: 1, yksikkö: 'l' },
        { id: 2, arvo: 'Perunoita', määrä: 3, yksikkö: 'kg' },
        { id: 3, arvo: 'Porkkanoita', määrä: 2, yksikkö: 'kg' },
        { id: 4, arvo: 'Kananmunia', määrä: 12, yksikkö: 'kpl' }
      ],
      /* Tähän on tallennettu lisättävät tavarat. */
      lisätavarat: [
        { id: 1, arvo: 'Maitoa', yksikkö: 'l' },
        { id: 2, arvo: 'Perunoita', yksikkö: 'kg' },
        { id: 3, arvo: 'Porkkanoita', yksikkö: 'kg' },
        { id: 4, arvo: 'Kananmunia', yksikkö: 'kpl' },
        { id: 5, arvo: 'Leipää', yksikkö: 'kpl' },
        { id: 6, arvo: 'Voita', yksikkö: 'pkt' },
        { id: 7, arvo: 'Juustoa', yksikkö: 'kpl' },
        { id: 8, arvo: 'Kinkkua', yksikkö: 'pkt' }
      ],
      /* Seuraavat 4kpl state.arraytä on vähän haastavampaa koodia varten, ei käytössä tällä hetkellä... */
      lisäysmäärä: [
        { idm: 1, arvo: '1', määrä: 1 },
        { idm: 2, arvo: '5', määrä: 5 },
        { idm: 3, arvo: '10', määrä: 10 },
        { idm: 4, arvo: 'Random', määrä: Math.round(Math.random() * 10) }
      ],
      lisääNyt: [
        { id: 5, arvo: 'Leipää', määrä: 2, yksikkö: 'kpl' }
      ],
      napit: [
        { id: 1, arvo: 'Maitoa' },
        { id: 2, arvo: '1' },
        { id: 3, arvo: 'Lisää' },
        { id: 4, arvo: 'Poista' }
      ],
      valinnat: [
        { id: 1, index: 0 },
        { id: 2, index: 0 } 
      ]
    };
  }

  lisääTavaraa = (tavaraId) => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === tavaraId) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      console.log(this.state.tavarat[elem].arvo + " on jo listalla, lisätään määrää.")
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += Math.round(Math.random()*10);
      this.setState({
        tavarat: [
          ...editTavarat
        ]
      })
    }
    else
    {
      console.log("pyydettyä tavaraa ei ole listalla, lisätään uusi.")
      elem = tavaraId-1;
      this.setState({ 
        tavarat: [
          ...this.state.tavarat,
          { 
            id: this.state.lisätavarat[elem].id,
            arvo: this.state.lisätavarat[elem].arvo,
            määrä: Math.round(Math.random() * 10),
            yksikkö: this.state.lisätavarat[elem].yksikkö
          }
        ]
      })
    }
  }
  /* Nää saikin tehtyä yhellä funktiolla, kun sille vaan antaa parametrin...
  lisääLeipää = () => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === 5) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += Math.round(Math.random() * 10)
      this.setState({
        tavarat: [
          ...editTavarat
        ]
      })
    }
    else
    {
      this.setState({ 
        tavarat: [
          ...this.state.tavarat,
          { id: 5, arvo: 'Leipää', määrä: Math.round(Math.random() * 10), yksikkö: 'kpl' }
        ]
      })
    }
    
  }
  lisääVoita = () => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === 6) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += Math.round(Math.random() * 10)
      this.setState({
        tavarat: [
          ...editTavarat
        ]
      })
    }
    else 
    {
      this.setState({ 
        tavarat: [
          ...this.state.tavarat,
          { id: 6, arvo: 'voita', määrä: Math.round(Math.random() * 10), yksikkö: 'pkt' }
        ]
      })
    }
  }
  lisääJuustoa = () => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === 7) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += Math.round(Math.random() * 10)
      this.setState({
        tavarat: [
          ...editTavarat
        ]
      })
    }
    else 
    {
      this.setState({ 
        tavarat: [
          ...this.state.tavarat,
          { id: 7, arvo: 'Juustoa', määrä: Math.round(Math.random() * 10), yksikkö: 'kpl' }
        ]
      })
    }
  }
  lisääKinkkua = () => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === 8) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += Math.round(Math.random() * 10)
      this.setState({
        tavarat: [
          ...editTavarat
        ]
      })
    }
    else 
    {
      this.setState({ 
        tavarat: [
          ...this.state.tavarat,
          { id: 8, arvo: 'Kinkkua', määrä: Math.round(Math.random() * 10), yksikkö: 'pkt' }
        ]
      })
    }
  }
  */
  /* Elä keuli, nää tuleekin vasta seuraavissa videoissa... 
  valitseTuote = () => {
    if(this.state.valinnat[0].indSel >= this.state.lisätavarat.length)
    {
      console.log("Palautetaan lisätavarat-indeksivalinta indeksiin 0.")
      var editValinnat = this.state.valinnat.slice();
      editValinnat[0].indSel = 0;
      this.setState({
        valinnat: [
          editValinnat
        ]
      })
    }
    var lismod = this.state.lisääNyt.slice();
    var napmod = this.state.napit.slice();
    lismod[0].id = this.state.lisätavarat[this.state.valinnat[0].indSel].id;
    lismod[0].arvo = this.state.lisätavarat[this.state.valinnat[0].indSel].arvo;
    lismod[0].yksikkö = this.state.lisätavarat[this.state.valinnat[0].indSel].yksikkö;

    napmod[0].n1 = this.state.lisätavarat[this.state.valinnat[0].indSel].arvo
    this.setState({
      lisääNyt: [
        lismod
      ],
      napit: [
        napmod
      ]
    })


  }
  valitseMäärä = () => {
    var idSelect;
    if(idSelect >= this.state.lisäysmäärä.length || idSelect == null)
    {
      idSelect = 0;
    }
    var lismod = this.state.lisääNyt.slice();
    var napmod = this.state.napit.slice();
    lismod[0].määrä = this.state.lisäysmäärä[idSelect].määrä;

    napmod[0].n2 = this.state.lisäysmäärä[idSelect].arvo
    this.setState({
      lisääNyt: [
        lismod
      ],
      napit: [
        napmod
      ]
    })
  }

  lisää = () => {
    var found = false;
    var elem = 0
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(this.state.tavarat[i].id === this.state.lisääNyt[0].id) {
        found = true;
        elem = i;
      }      
    };
    if(found)
    {
      var editTavarat = this.state.tavarat.slice();
      editTavarat[elem].määrä += this.state.lisääNyt[0].määrä
      this.setState({
        tavarat: [
          {editTavarat}
        ]
      })
    }
    else
    {
      this.setState({
        tavarat: [
          ...this.state.tavarat, 
          this.state.lisääNyt[0] 
        ]
      })
    }
  }
  
  poista = () => {
    //this.state.tavarat.length
    this.setState({
      tavarat: [
        ...this.state.tavarat
      ]
    })
  }
  */
  poistaTavara = (tavaraId) => {
    var editTavarat = [];
    for(let i = 0; i < this.state.tavarat.length; i++)
    {
      if(tavaraId !== this.state.tavarat[i].id)
      {
        editTavarat = [
          ...editTavarat,
          this.state.tavarat[i]
        ]
      }
      else
      {
        console.log("Poistetaan tavara " + this.state.tavarat[i].arvo)
      }
    }
    this.setState({
      tavarat: [
        ...editTavarat
      ]
    })
  }

  render ()
  {
    const { appName, appDate } = this.props;
    return(
      <div className = { styles.asettelu1 }>
        <Otsikko
          appName = { appName }
          appDate = { appDate }
        />
        <Lista
          tavarat = { this.state.tavarat }
          poista = { this.poistaTavara }
        />
        <Nappi
          lisää = { this.lisääTavaraa }
          /*leipä = { this.lisääLeipää }
          voi = { this.lisääVoita }
          juusto = { this.lisääJuustoa }
          kinkku = { this.lisääKinkkua }
          tuote = { this.valitseTuote }
          määrä = { this.valitseMäärä }
          lisää = { this.lisää }
          poista = { this.poista }
          napit = {this.state.napit}*/
        />
      </div>
    )
  }
}

export default App;
