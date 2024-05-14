let str = "assignment";
let result = str.split('').map((char, index) =>
	index === 0 ? char.toUpperCase() : char).join('');
console.log(result);