const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));// true: anytype, false:string/array
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/houses')
    .get((req,res)=>{
        let houses = [
            {"home":"Main Home", "place":"Main Place"},
            {"home":"Second Home", "place":"Second Place"}
        ];

        res.json(houses);
    });

app.use('/api', router);

app.listen(port, (err)=>{
    if(err)
        throw err;

    console.log(`Listening on port ${port}...` )
});
