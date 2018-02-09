let jojo = 0;
let dateStart = new Date();

function count(n){
    if(jojo===0){
        console.time('async');
    }
    let j=n;
    let i=0;
    for(let _i=0; _i<n; _i++){
        j=j-1;
        i = _i;
    }
    console.log(`i:${i} - j:${j}`);
    // console.log('inc:' + jojo);
    if(jojo===9){
        // let dateEnd = new Date();
        // let resp = dateEnd.getTime() - dateStart.getTime();
        // console.log('time = ' + resp);
        console.timeEnd('async');
    }
}

function async(){
    // console.time('async');

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);

    setTimeout(function(){
        count(1e9);
        jojo = jojo + 1;
    },0);
}


function main(){
    console.time('total');
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;
    count(1e9);
    jojo = jojo + 1;

    console.timeEnd('total');//n: 3736.320ms

}

async();
// main();
