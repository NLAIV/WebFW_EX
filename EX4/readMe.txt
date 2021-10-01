Jos postmanilla tarkistaa, kannattaa importata EX4_postman.json postmaniin, google kertoo miten se onnistuu... ("postman import collection...")

Jos itse haluat kaikki nämä kirjoitella testattavaksi, olen tähän koonnut ne pyynnöt ja pyyntörakenteet, jotka tarvitsevat json-tyyppisen tietueen http-pyynnön requestiin.
Kaikki kentät tarvitaan, jos ei toisin erikseen mainita.
Ja jätä tämä päälle testataksesi EX5, siinä ei erikseen ole tätä apia, vaan se linkkaa tähän.

admin switch, jos vastaus on "Request denied":

{
    "passwd": "12345"
}

Lisää uusi tuote:

{
    "manf": "Universal Value",
    "mat": "pla",
    "col": "green",
    "img": "pla_green.png",
    "price": 19.90,
    "desc": "pla vihreä",
    "sDesc": "Halpa Vihreä PLA-muovi 3D-tulostimeen..."
}

Lisää uusi käyttäjä:

{
    "name": "Lucky Luke",
    "addr": "Wild West",
    "pnum": "123456789"
}

lisää uusi lasku/kuitti/tilaus:

{
    "idUser": 0,
    "items": [
        {"id": 1, "amt": 1},
        {"id": 2, "amt": 1},
        {"id": 9, "amt": 1},
        {"id": 11, "amt": 2},
        {"id": 14, "amt": 1}
    ]
} 

Muokkaa tuotetta. Tässä ei kaikki kentät ole pakollisia:

{
    "manf": "universal",
    "mat": "pla",
    "col": "transparent",
    "img": "pla_transparent.png",
    "price": 15,
    "desc": "pla läpinäkyvä",
    "sDesc": "Läpinäkyvä PLA-muovi 3D-tulostimeen..."
}