const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require( 'axios' );
require('dotenv').config();

/**
 * GET http://localhost:300/api/giphy
 * Returns an array of image objects:
 * {
 *  See Giphy API Endpoint for explanation
 *  https://developers.giphy.com/docs/api/endpoint
 * }
 */

router.get('/:search', (req, res) => {
    console.log( 'in /api/giphy GET', req.params.search )
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.search}`)
    .then( response => {
            res.send(response.data)
        }).catch( err => { 
            res.sendStatus(500)
        })     
});

module.exports = router;


