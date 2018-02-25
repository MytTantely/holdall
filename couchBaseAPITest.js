const Model = require('./couchBaseAPI').Model;

const Test = {};
Model.get('prd1');

// Test.insert = function insert(){
//     for(let i = 10; i < 20; i++){
//         let obj = { 
//             kind: 'product',
//             id: i,
//             name: 'A green bell',
//             price: 13.5 * i,
//             tags: [ 'home', 'green', 'red' ] 
//         };
    
//         Model.set(obj.kind + obj.id, obj);
//     }
    
// }

Model.search();

Model.process((res)=>{
    // if(err){
    //     console.log(err);
    //     throw err;
    // }

    for(let i=0; i < res.length; i++){
        Model.delete(res[i].key);
    }
});

Model.search();

// Model.delete('product10');

// Test.insert();