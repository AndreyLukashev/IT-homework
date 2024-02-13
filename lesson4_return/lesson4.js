// function reverse

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
let arrrev = [];

const reverse = (arr) => {    
for (let i = (arr.length - 1); i>=0; i-- ) {
    arrrev.push(arr[i])};
    console.log(arrrev);
};

reverse(arr);



// function truncate 

let str = 'Вот, что мне хотелось бы сказать на эту тему.';
const maxlength = 25;
console.log(str, maxlength);
const separator = '.';

const strtrun = (string) => {
for (let i = str.length - 1; i > (maxlength - 4); i--) {
     str = str.slice(0, -1) }

for ( i = 0; i < 3; i++){
     str = str + separator }
}

strtrun(str);
console. log(str, str.length);

 