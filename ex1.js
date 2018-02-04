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
// The old-n-busted callback way
function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
		let obj = {};
		obj.text = text;
		obj.printed = false;	

		output(`Processing ${file}`);

		if(file==="file1"){
			resps[0] = obj;
		}else if(file==="file2"){
			resps[1] = obj;
		}else{ // file3
			resps[2] = obj;
		}

		for(let i=0; i < 3; i++){
			if(checkPreviousDone(resps, i) === true && (resps[i] !== undefined && resps[i].printed === false)) {
				output(`file${i+1}:${resps[i].text}`);
				resps[i].printed = true;
			}				
		}
	});
}

function checkPreviousDone(list, index){
	if(index === 0){
		// first element no previous value
		if(list[0] !== undefined){
			return true;
		}
	}else{
		for(let i=0; i < index; i++){
			if(list[i] === undefined){
				return false;
			}
		}
		return true;
	}	
}

let resps = [];

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
