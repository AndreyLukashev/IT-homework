// function return

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
let arrrev = [];

const reverse = (arr) => {    
for (let i = (arr.length - 1); i>=0; i-- ) {
    arrrev.push(arr[i])};
    console.log(arrrev);
};

reverse(arr);


