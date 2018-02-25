const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Account = require('./account');
let acc = new Account();

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

router.route('/depot')
    .post((req,res)=>{
        let msg = `Depot ${req.body.amount}$`;
        console.log(msg);

        acc.depot(req.body.amount);

        res.json({balance: acc.getBalance()});
    });

router.route('/withdraw')
    .post((req,res)=>{
        let msg = `Withdraw ${req.body.amount}$`;
        console.log(msg);

        acc.withdraw(req.body.amount);

        res.json({balance: acc.getBalance()});
    });
    
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);