function addAsync(x, y, cb){
    setTimeout(function(){
        return cb(x+y);
    },10000);
}

module.exports = {addAsync}