function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
    
    // what do we do here?
    return new Promise(function(resolve, reject){
        console.log(`Processing ${file}...`);
        fakeAjax(file,resolve);
    });
}

function reject(err){
    output(err.message);
}
// request all files at once in "parallel"
// ???
const p1 = getFile("file1");
const p2 = getFile("file2");
const p3 = getFile("file3");
p1
.then(output, reject)
.then(
    function () {
        return p2;
    }
)
.then(output, reject)
.then(
    function(){
        return p3;
    }
)
.then(output, reject)
.then(
    function(){
        output("complete!")
    }
    ,reject
)