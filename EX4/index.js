const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 4000
const data = require('./data.json')
const cors = require('cors')

let admin = false;
let adminpass = "12345";

app.use(cors());
app.use(bodyParser.json());

let filaments = data.filaments;
/*
*   id: number;
*   manf: string;
*   mat: string;
*   col: string;
*   img: string;
*   price: number;
*   desc: string;
*   sDesc: string;
*/
let filCount = filaments.length;

let users = [];
/*
*   idUser: number
*   name: String
*   addr: String
*   pnum: number(10+)/string?
*/

let invoices = [];
/*
*   idInv: number
*   idUser: userId
*   total: number
*   items: [
*           {id: x, amt: y}
*          ]      
*/
let invCount = 0;

/*   Käynnistä komennolla: npx nodemon index.js   */

//  Suoran palautuksen sijaan hauissa kannattais ehkä ensin suorittaa findIndex tai filter, ja sit palauttaa mitä tuli. Sais tyhjän haun ilmastua selkeemmin... 
//  Hae kaikki tuotteet
app.get("/filaments", (req, res) => {
    res.json(filaments);
});

//  Hae Tietty tuote
app.get("/filaments/:id", (req, res) => {
    res.json(filaments[req.params.id]);
});

//  Hae Tietyllä parametrillä: väri
app.get("/filaments/col/:col", (req, res) => {
    res.json(filaments.filter(filament => filament.col == req.params.col));
});

//  Hae Tietyllä parametrillä: materiaali
app.get("/filaments/mat/:mat", (req, res) => {
    res.json(filaments.filter(filament => filament.mat == req.params.mat));
});

//  Hae Tietyllä parametrillä: hakusana
app.get("/filaments/search/:sTerm", (req, res) => {
    res.json(
        filaments.filter(
            filament => filament.sDesc.toLowerCase().includes(req.params.sTerm.toLowerCase())
        )
    );
});

//  Hae kaikki käyttäjän laskut/kuitit
app.get("/invoice/:idUser", (req, res) => {
    res.json(invoices.filter(invoice => invoice.idUser == req.params.idUser));
});

//  Hae käyttäjän tietty lasku/kuitti
app.get("/invoice/:idUser/:idInv", (req, res) => {
    let invTemp = invoices.filter(invoice => invoice.idUser == req.params.idUser);
    res.json(invTemp.filter(invoice => invoice.idInv == req.params.idInv));
});

//  Lisää tuote
/*  Pyynnön JSON rakenne-esimerkki, kaikki kentät tarvitaan!

{
    "manf": "Value",
    "mat": "pla",
    "col": "green",
    "img": "pla_green.png",
    "price": 19.90,
    "desc": "pla vihreä",
    "sDesc": "Halpa Vihreä PLA-muovi 3D-tulostimeen..."
}

*/
app.post("/newFilament", (req, res) => {
    if(admin) {
        if(req.body.manf !== undefined  &&
            req.body.mat !== undefined  &&
            req.body.col !== undefined  &&
            req.body.img !== undefined  &&
            req.body.price !== undefined&& 
            req.body.desc !== undefined &&
            req.body.sDesc !== undefined )
        {
            filaments.push({
                id: filCount,
                manf: req.body.manf,
                mat: req.body.mat,
                col: req.body.col,
                img: req.body.img,
                price: req.body.price,
                desc: req.body.desc,
                sDesc: req.body.sDesc
            });
            res.send("Item " + filCount + " added.");
            filCount++;
        }
        else {
            res.send("Check all fields");
        }
    }
    else {
        res.send("Request denied");
    }
});

//  Lisää uusi käyttäjä
/*  Pyynnön rakenne-esimerkki, kaikki kentät tarvitaan!

{
    "name": "Lucky Luke",
    "addr": "Wild West",
    "pnum": "123456789"
}

*/
app.post("/newUser", (req, res) => {
    if(req.body.name != undefined &&
        req.body.addr!= undefined &&
        req.body.pnum!= undefined
        ) {
        users.push(
            {
                idUser: users.length,
                name: req.body.name,
                addr: req.body.addr,
                pnum: req.body.pnum
            }
        );
        res.send("OK, User " + req.body.name + " added.");
    }
    else {
        res.send("Check all fields")
    }
    
});

//  Lisää uusi lasku/kuitti käyttäjälle
/*  Pyynnön rakenne-esimerkki:

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

*/
app.post("/purchase", (req, res) => {
    debugger;
    let exists = false;
    let total = 0;
    //  Tarkista tuotemäärät. Negatiiviset määrät käännetään positiivisiksi.
    for(let j = 0; j < req.body.items.length; j++) {
        if(req.body.items[j].amt < 0) {
            req.body.items[j].amt = -req.body.items[j].amt
        }
    }
    //  Tarkista tuotemäärä. Nollarivit poistetaan.
    req.body.items = req.body.items.filter(item => item.amt != 0);
    //  Tarkista, että tuote on olemassa, olemattomat tuotteet poistetaan listalta.
    req.body.items = req.body.items.filter(item => filaments.find(filament => filament.id == item.id));
    //  Tässä vois varmaan spicellä ladata items listalle tuotenimen ja hinnan id:n avulla
    //  Lopuksi, tarkista että listalla on tuotteita, tyhjää listaa ei kannata lisätä...
    if(req.body.items.length === 0) {
        res.send("No items to add");
    }
    else {
        //  Tarkista, että käyttäjä löytyy, ei lisätä tyhjälle käyttäjälle.
        //  Tää kannattas varmaan vaihtaa käyttämään "array.prototype.findIndex()" funktiota...
        for(let i = 0; i < users.length; i++) {
            if(users[i].idUser == req.body.idUser) {
                exists = true;
                for(let j = 0; j < req.body.items.length; j++) {
                    total += filaments.find(filament => filament.id == req.body.items[j].id).price * req.body.items[j].amt;
                }
                invoices.push({
                    idInv: invCount,
                    idUser: req.body.idUser,
                    total: total,
                    items: req.body.items 
                });
                res.send("Added invoice number " + invCount + " with total of " + invoices[invCount].total + " for user " + req.body.idUser + " / " + users[req.body.idUser].name);
                invCount++;
                break;
            }
        }
        if(!exists) {
            res.send("User not found")
        }
    }
});

//  !!!!!!!!!!!!!!!!!!!!!!!!
//  !!!   Admin switch   !!!
//  !!!!!!!!!!!!!!!!!!!!!!!!

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*  !!!   Pyynnön rakenne. Tarkista tämä, jos tulee vastauksena "Request denied"   !!!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

{
    "passwd": "12345"
}

*/
app.put("/admin", (req, res) => {
    if(admin) {
        admin = false;
        res.send("Log Out\nNormal User");
    }
    else if (adminpass == req.body.passwd) {
        admin = true;
        res.send("Admin User");
    }
    else {
        res.send("Access denied")
    }
});

//  Muokkaa tuotetta
/*  Pyynnön JSON rakenne-esimerkki, tästä voi jättää osan riveistä käyttämättä

{
    "manf": "universal",
    "mat": "pla",
    "col": "transparent",
    "img": "pla_transparent.png",
    "price": 15,
    "desc": "pla läpinäkyvä",
    "sDesc": "Läpinäkyvä PLA-muovi 3D-tulostimeen..."
}

*/
app.put("/filaments/:id", (req, res) => {
    if(admin) {
        let found = filaments.find(filament => filament.id == req.params.id)
        if (found == undefined) {
            res.send("Item " + req.params.id + " not found.");
            return;
        }
        if(req.body.manf != undefined){
            found.manf = req.body.manf;
        }
        if(req.body.mat != undefined){
            found.mat = req.body.mat;
        }
        if(req.body.col != undefined){
            found.col = req.body.col;
        }
        if(req.body.img != undefined){
            found.img = req.body.img;
        }
        if(req.body.price != undefined){
            found.price = req.body.price;
        }
        if(req.body.desc != undefined){
            found.desc = req.body.desc;
        }
        if(req.body.sDesc != undefined){
            found.sDesc = req.body.sDesc;
        }
        res.send("OK, item " + req.params.id + " modified.");
    }
    else {
        res.send("Request denied")
    }
});

//  Poista tietty kuitti/lasku
app.delete("/invoice/:idInv", (req, res) => {
    if(admin) {
        let found = invoices.findIndex(invoices => invoices.idInv == req.params.idInv)
        if(found == -1) {
            res.send("Invoice not found.")
        }
        else {
            invoices.splice(found, 1);
            res.send("invoice " + req.params.idInv + " deleted.")
        }
    }
    else {
        res.send("Request denied.")
    }
});

//  Poista tietty tuote
app.delete("/filaments/:id", (req, res) => {
    if(admin) {
        let found = filaments.findIndex(filaments => filaments.id == req.params.id)
        if(found == -1) {
            res.send("Item not found.")
        }
        else {
            filaments.splice(found, 1);
            res.send("item " + req.params.id + " deleted.")
        }
    }
    else {
        res.send("Request denied.")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});