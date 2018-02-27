const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('mytBucket1User','mytBucket1Pwd');


const bucket = cluster.openBucket('mytBucket1');
const Model = {};

Model.query = function query(){
    const N1qlQuery = couchbase.N1qlQuery;
    const nickel = N1qlQuery.fromString("select name, price, cat from mytBucket1 where kind = 'product' and cat = 'blue' limit 10"); 

    console.log('Querying...');
    bucket.query(nickel, (err, rows, meta)=>{
        for (let i = 0; i < rows.length; i++){
            console.log('Row : ' + JSON.stringify(rows[i]));
            console.log('Product Name: %s - Price: %s - Color: %s', rows[i].name, rows[i].price, rows[i].cat);
        }
    });
}

Model.search = function search(){
    const ViewQuery = couchbase.ViewQuery;
    const query = ViewQuery.from('product_select', 'by_id');

    console.log('Calling Search...');
    bucket.query(query, function(err, results){
        if(err){
            console.log(err);
            throw err;
        } 

        console.log('View no error');
        for(let i=0; i < results.length; i++){
            console.log(results[i]);
        }
    });
}

Model.process = function process(viewName, callback){
    const ViewQuery = couchbase.ViewQuery;
    const query = ViewQuery.from('product_select', viewName);


    console.log('Calling Search...');
    bucket.query(query, function(err, results){
        if(err){
            console.log(err);
            throw err;
        } 

        return callback(results);
    });
}

Model.get = function get(docName){
    bucket.get(docName, (err, res)=>{
        if(err){
            console.log(err);
            throw err;
        }
            
        
        console.log('Value: ', res.value);
    });
}

Model.set = function set(docName, doc){
    bucket.insert(docName, doc, (err, res)=>{
        if(err){
            console.log('operation failed', err);
            return;
        }

        console.log('success!', res);
    });
}

Model.delete = function remove(docName){
    bucket.remove(docName, (err, res)=>{
        if(err)
            console.log('operation failed', err);

        console.log('success!', res);
    });
}


module.exports = {Model};