const Model = require('./couchBaseAPI').Model;

const Test = {};
// Model.get('prd1');

Test.insert = function insert(){
    let category = "red";
    for(let i = 0; i < 1e6; i++){
        if(i % 3 === 0)
            category = "blue";
        
        if(i % 3 === 1)
            category = "green";
            
        if(i % 3 === 2)
            category = "red";


        let obj = { 
            kind: 'product',
            id: i,
            cat: category,
            name: 'A green bell',
            price: 13.5 * i,
            tags: [ 'home', 'green', 'red' ] 
        };
    
        Model.set(obj.kind + obj.id, obj);
    }
    
}

Model.query();

// Model.search();

// Model.process('by_category',(res)=>{
//     // if(err){
//     //     console.log(err);
//     //     throw err;
//     // }

//     for(let i=0; i < res.length; i++){
//         Model.delete(res[i].key);
//     }
// });

// Model.search();

// Model.delete('product10');

// Test.insert();