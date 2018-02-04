const add = require('./asyncAdd').addAsync;

add(9,6,(result)=>{
    console.log(`result = ${result}`);
});