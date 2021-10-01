function uutinen(tyyppiID, id, tyyppiTeksti, teksti)
{
    this.tyyppiID = tyyppiID;           // Uutisen tyyppi tai aihe, numerona hakua varten
    this.id = id;                       // Uutisen ID, numerona uutisen hakua varten.
    this.tyyppiTeksti = tyyppiTeksti;   // Aihe tekstinä otsikkoa varten.
    this.teksti = teksti;               // Uutisotsikko, ehkä uutistekstin alku.
}

/*  TODO ADVANCED  Randomgeneraattorit, 
    1. tyyppiID, joka rajaa uutiset tyypin mukaan, kutsutaan aina uuden uutistiilen alussa, jotta kaikki tiilen sisällä olevat uutiset olisivat samasta aiheesta
    2. ID, joka hakee tyypin sisältä jonkun uutisen, jonka teksti tulee näkyville.

    Uutistekstien luominen...
*/  