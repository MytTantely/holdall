const add = require('./asyncAdd').addAsync;
const mul = require('./asyncAdd').mulAsync;

let a = new Promise((resolve, reject)=>{
    add(9,60, resolve);
});

let b = new Promise((resolve, reject)=>{
    mul(9,60, resolve);
});

// a
// .then(
//     (result)=>{
//     console.log(result);
//     }, 
// reject);

// b
// .then(
//     (result)=>{
//         console.log(result);
//     },reject
// );

a
.then(
    (result)=>{
        console.log(result);
        return b;
    }, 
    reject
)
.then(
    (result)=>{
        console.log(result);
    },reject
);

function reject(err){
    console.error(err);
} 
// add(9,6,(result)=>{
//     console.log(`result = ${result}`);
// });