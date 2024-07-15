let id = 33
console.log(typeof id);

let stringID = String(id)

console.log(typeof stringID);

id = "33bc"

let valueAsNumber = Number(id)
console.log(typeof valueAsNumber)

console.log(valueAsNumber);

let state = "shoheb"

let stateAsBool = Boolean(state)
console.log(stateAsBool);

//conversion to number 
// 33 => number
//"33abc" => NaN
// true  => 1
//null => 0

// conversion to boolean 
// "string" => true
// "" => false
//