const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

let queryText = ""
// return all favorite images
router.get('/', (req, res) => {
  const category = req.query.category
  if(category == "all"){
    console.log("a", category)
    queryText = `SELECT favorites.url FROM favorites`
  }else{
    console.log(category)
    queryText = `SELECT favorites.url
    FROM favorites
    JOIN category ON favorites.category_id = category.id
    WHERE category.name ='` +category + `'`
  }
  console.log(queryText)
  pool.query(queryText).then((response) =>{
    res.send(response)
  }).catch((err) => {
    res.sendStatus(500)
  })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
