const express = require('express')
const app = express()
const port = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const games = require('./games.json');

app.get('/', (req, res) => {
  res.render('index', {
    css: "style.css",
    games,
  })
})

app.get('/game/:nomDuJeu', (req, res) => {
  const  nomDuJeu  = req.params.nomDuJeu; 
  console.log(nomDuJeu); 
  const gameObjet = games.find(el =>  el.name === nomDuJeu); 
  console.log(gameObjet); 
  if(gameObjet) {
    res.render(nomDuJeu, {
      css: gameObjet.cssFile || "style.css",
      games,
    })
  } else {
    return res.status(404).send("404")
  }
})

//  app.get('/game/fourchette', (req, res) => {
//     res.render('fourchette', {
//       css: "/css/style.css",
//       games,
//     })
// })

// app.get('/game/diceRoller', (req, res) => {
//     res.render('diceRoller', {
//       css: "/css/style.css",
//       games,
//     })
// })

app.listen(port, () => {
  console.log('localhost => port' + port)
})

