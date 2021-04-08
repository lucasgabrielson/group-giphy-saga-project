const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require( 'axios' );
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    console.log( 'in /api/giphy GET', req.query)
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.searchQuery}`)
    .then( response => {
            res.send(response.data)
        }).catch( err => { 
            res.sendStatus(500)
        })    
});

module.exports = router;