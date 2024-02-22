// Функция Find

const listUser = [
    {id: 1, nameUser: 'John', age: 15},
    {id: 2, nameUser: 'Mary', age: 23},
    {id: 3, nameUser: 'Jack', age: 25},
    {id: 4, nameUser: 'Pete', age: 18},
    {id: 5, nameUser: 'Jason', age: 17},
    {id: 6, nameUser: 'Lisa', age: 14}
];

const findUser = (arr) => {
    const idNumber = prompt('Введите id номер');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(idNumber)) {
            console.log(arr[i]);
            break;
        }   else if ((Number(idNumber) < 1) || (Number(idNumber) > arr.length)) {console.log('Такого id номера не найдено')} 
    }
}

findUser(listUser)


// Функция Filter

const filterUser = (arr) => {
    let adultUser = [];
    for (let i = 0; i < arr.length; i++) {  
        if (arr[i].age >= 18) {
           adultUser.push(arr[i])
        }    
    }
    return adultUser
}

console.log(filterUser(listUser))


