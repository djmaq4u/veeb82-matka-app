const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


// näitefunktsioon loengust 11
function aeg(req, res) {
  const aeg = new Date()
  res.send("Kellaaeg on: " + aeg.toString())
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/kontakt', (req, res) => res.render('pages/kontakt'))
  .get('/uudised', (req, res) => res.render('pages/uudised'))
  .get('/aeg', aeg) // ise lisatud
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // 1 staatilise kataloogi asukoht
  // mall on html doc, milles on html-ile mitteomaseid kohti, %-tagid on mallimuutujad
  // ühine menüü jm
  // 2 ja 3 mallisüsteem, mallid on kataloogis "views"
  // mallisüsteem ejs
  // get funktsioon, 