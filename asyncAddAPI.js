const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const add = require('./asyncAdd').addAsync;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3060;

// ROUTES FOR OUR API
const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
    console.log('Something is happening!');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:3060/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// route ends with add
router.route('/add')
    .post((req,res)=>{
        console.log(`adding (${req.body.x},${req.body.y})`);
        let x = req.body.x;
        let y = req.body.y;
        // let r = x + y;
        add(x,y,(r)=>{
            res.json({result: r});
        });
        // res.json({result: r});
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);