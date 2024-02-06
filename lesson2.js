let surname = prompt("Укажите вашу фамилию");
while (surname === ' ' || !surname || !isNaN(surname)) {
       surname = prompt("Укажите вашу фамилию");
      }

let firstname = prompt("Укажите ваше имя");
while (firstname === ' ' || !firstname || !isNaN(firstname)) {
  firstname = prompt("Укажите ваше имя");
 }

let lastname = prompt("Укажите ваше отчество");
while (lastname === ' ' || !lastname || !isNaN(lastname)) {
  lastname = prompt("Укажите ваше отчество");
 }

let age = prompt("Укажите ваш возраст");
while (age === ' ' || !age || isNaN(Number(age))) {
  age = prompt("Укажите ваш возраст");
}
let numage = parseInt(age);
const age1 = numage * 365;
const age2 = numage + 5;

const sex = confirm("Ваш пол мужской?");
let sex1;
if (sex == true) {
    sex1 = 'мужской'
    } else { sex1 = 'женский' };

let pension;
if (age < 58) {
    pension = "нет";
} else if (age>62) {
           pension = "да";
       } else if (sex1 === 'женский' ) {
                  pension = "да";
} else { pension = "нет" }

const arr = [surname, firstname, lastname, age, age1, age2, sex1, pension];
const anketa = 'ваше ФИО:' + ' ' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + '\n' +
               'ваш возраст в годах:' + ' ' + arr[3] + '\n' +
               'ваш возраст в днях:' + ' ' + arr[4] + '\n' +
               'через 5 лет вам будет:' + ' ' + arr[5] + '\n' +
               'ваш пол:' + ' ' + arr[6] + '\n' +
               'вы на пенсии:' + ' ' + arr[7] + '\n';
const user = alert(anketa);
