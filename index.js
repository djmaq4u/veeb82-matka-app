const matk1 = {
  nimetus: "Jalgsimatk Kõrvemaal",
  pildiURL: "./pildid/BMW_pealtnagija_foto.jpg",
  kohti: 12,
  kirjeldus: "Kõrvemaal ootavad Sind võrratu loodusmaastik, tähistatud tervise-, matka- ja loodusrajad.",
  registreerunud: [],
}

const matk2 = {
  nimetus: "Süstamatk ümber Hiiumaa",
  pildiURL: "./pildid/klassikas.jpg",
  kohti: 6,
  kirjeldus: "Hiiumaa laiud on parimaks süstamatka piirkonnaks Baltimaades.",
  registreerunud: [],
}

const matk3 = {
  nimetus: "Jalgrattamatk Virumaal",
  pildiURL: "./pildid/126_2667.JPG",
  kohti: 10,
  kirjeldus: "Ida-Virumaa, mis on tuntud rohkem tööstuslinnade ja tuhamägede poolest, võlub mererandade, pankranniku ning looduslike matkaradadega.",
  registreerunud: [],
}

const matk4 = {
  nimetus: "Kepikõnnimatk ümber Tartu",
  pildiURL: "./pildid/Mon_25.bmp",
  kohti: 2,
  kirjeldus: "Emajõe Ateenas on lihtsalt mõnus komberdada!",
  registreerunud: [],
}

const matkad = [matk1, matk2, matk3, matk4]

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


// näitefunktsioon loengust 11
function aeg(req, res) {
  const aeg = new Date()
  //res.send("Kellaaeg on: " + aeg.toString())
  
}

// KODUTÖÖ -- kui sisest. vale nr, siis anda teade: a'la "sellist matka pole olemas"
function registreeru (req, res) {

  //if (isNaN(req.params.matk)) {
  
  const matk = parseInt(req.params.matk)
    if (isNaN(matk)) {
    return res.render("pages/viga", {veateade: "Ilmnes viga: ssisesta siiski matka-number :)"})
  }

  //if (req.params.matk >= matkad.length) {
    if (matk >= matkad.length) {
    return res.render("pages/viga", {veateade: "Ilmnes viga: sellist matkanumbrit meil pole :(("})
  }
  const matkaAndmed = matkad[matk]
  //renderdame malli
  res.render("pages/registreeru", {matkaNumber: matk, matkaAndmed: matkaAndmed})
}

function lisaRegistreerumine(req, res) {
  if(req.query.matk <0 || req.query.matk >= matkad.length) {
    return res.send("Matka number on vale. Registreerumine ebaõnnestus")
  }

  const registreerumine = {
    matk: req.query.matk,
    nimi: req.query.nimi,
    email: req.query.email
  }

  const matk = matkad[req.query.matk]
  matk.registreerunud.push(registreerumine)

  // ka backendi poolel saab testimiseks console log-i kasutada ja näidatakse matkaobjekti seejärel
  console.log(matk)

  res.send(`Saadeti andmed: matk: ${registreerumine.matk} nimi - ${registreerumine.nimi}, email: ${registreerumine.email}, kokku registreerunuid: ${matk.registreerunud.length}`)

}

function saadaMatkad(req, res) {
  const avalikudAndmed = matkad.map((matk) => {
    return { ...matk, registreerunud: matk.registreerunud.length}
  })
  res.send(avalikudAndmed)
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/uudised', (req, res) => res.render('pages/uudised'))
  .get('/registreeru/:matk', registreeru)
  .get('/aeg', aeg) // ise lisatud
  // teeme aadressid, mis mõeldud masinloetavaks (api)
  // matkale registreerunu andmete kirjapanekuks
  .get('/api/registreeru', lisaRegistreerumine)
  // küsime kõigi matkade andmed
  .get('/api/matkad', saadaMatkad)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // 1 staatilise kataloogi asukoht
  // mall on html doc, milles on html-ile mitteomaseid kohti, %-tagid on mallimuutujad
  // ühine menüü jm
  // 2 ja 3 mallisüsteem, mallid on kataloogis "views"
  // mallisüsteem ejs
  // get funktsioon, 