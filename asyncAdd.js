function addAsync(x, y, cb){
    setTimeout(function(){
        return cb(x+y);
    },1000);
}

function mulAsync(x, y, cb){
    setTimeout(function(){
        return cb(x*y);
    },1000);
}

module.exports = {addAsync, mulAsync}