const surname = prompt("Укажите вашу фамилию");
const firstname = prompt("Укажите ваше имя");
const lastname = prompt("Укажите ваше отчество");
const age = prompt("Укажите ваш возраст");
const sex = confirm("Ваш пол мужской?");
const age1 = parseInt(age) * 365;
const age2 = parseInt(age) + 5;
let sex1;
if (sex == true) {
    sex1 = 'мужской'
} else { sex1 = 'женский' };
let pension;
if (age < 63) {
  pension = "нет";
} else {
  pension = "да";
}
const arr = [surname, firstname, lastname, age, age1, age2, sex1, pension];
const anketa = 'ваше ФИО:' + ' ' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + '\n' +
               'ваш возраст в годах:' + ' ' + arr[3] + '\n' +
               'ваш возраст в днях:' + ' ' + arr[4] + '\n' +
               'через 5 лет вам будет:' + ' ' + arr[5] + '\n' +
               'ваш пол:' + ' ' + arr[6] + '\n' +
               'вы на пенсии:' + ' ' + arr[7] + '\n';
const user = alert(anketa);
