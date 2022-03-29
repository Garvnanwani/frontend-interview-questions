// inverse keys and values in a json object

const input = {	a:1,b:2,c:3,d:4} 

const reverseKeys = (input) => {
	let output = {}

	for(let key in input) {
		output[input[key]] = key;
	}

	return output;
}

console.log(JSON.parse(JSON.stringify(reverseKeys(input))))