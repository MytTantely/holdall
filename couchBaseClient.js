const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('mytBucket1User','mytBucket1Pwd');

const bucket = cluster.openBucket('mytBucket1');
const N1qlQuery = couchbase.N1qlQuery;

try{
    bucket.manager().createPrimaryIndex(function(){
        bucket.upsert('user:king_arthur',{
                'email':'kingarthur@couchbase.com','interests':['Holy Grail','African Swallows']
            },
            function(err,result){
                bucket.get('user:king_arthur', function(err, result){
                    console.log('Got result: %j', result.value);
                    bucket.query(
                        N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1'),
                        ['African Swallows'],
                        function(err,rows){
                            console.log("Got rows: %j", rows);
                        }
                    );
                });
            }
        );
    });
}catch(e){
    console.error(e.message);
}

process.on('uncaughtException', function(err){
    console.log(err.message);
   
    process.exit(1);
});
