let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrrev = [0];
console.log(typeof(arrrev))

const reverse = (arr) => {    
for (let i = (arr.length - 1); i>=0; i-- ) {
arrrev += arr[i]};

console.log(typeof(arrrev));
console.log(arrrev);
}

reverse(arr)
