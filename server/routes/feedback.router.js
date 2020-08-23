const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { query } = require('../modules/pool');

// router.get('/', (req, res) => {
//     console.log('GET /api/feedback');
//     pool.query('SELECT * from "feedback" ORDER BY "id";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/feedback', error)
//         res.sendStatus(500);
//     });
// });

router.post('/', (req, res) => {
    let query = `INSERT INTO feedback (feeling, understanding, support, 
    comments) VALUES ($1, $2, $3, $4)`
    pool.query(query, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in PUT:', error)
        res.sendStatus(500)
    })
});

module.exports = router;