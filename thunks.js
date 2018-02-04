function add(x,y){
    return x + y;
}

var thunk1 = function(){
    return add(10,15);
}

function asyncAdd(x, y, cb){
    setTimeout(function(){
            cb(x + y)
        }, 
    1000);
}

console.log(thunk1());

var thunk2 = function(cb){
    asyncAdd(100,15, cb);
}

thunk2((sum)=>{console.log(sum);});