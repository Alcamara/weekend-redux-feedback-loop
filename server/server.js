const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));


/** ---------- EXPRESS ROUTES ---------- **/
//post route
app.post('/feedback',(req,res)=>{
    console.log(req.body);

    const insertQuery = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `

    const paramQuery = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]

    pool.query(insertQuery,paramQuery)
        .then(()=>{
            res.sendStatus(200)
        }).catch((err)=>{
            console.log('Adding data to server failed', err);
        })
})

//get route
app.get('/feedback/admin',(req,res)=>{
    const sqlSelect = `
        SELECT * FROM "feedback"
        ORDER BY "date" DESC;
    `

    pool.query(sqlSelect)
        .then((result)=>{
            res.send(result.rows)
        }).catch((err)=>{
            console.log('Get request failed', err);
            res.sendStatus(500)
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});