//Первое задание
// var year = Number(prompt("Введите год рождения"));
// console.log(typeof year);
// if (year){
//     var age = 2019 - year;
//     if (age > 18) {
//         alert("Теперь можещь дрочить на порно");
//     } else if (age < 12) {
//         alert("Рано");
//     } else {
//         alert('ты додик');
//     }
// }
// else {
//     alert("Мудак");
// }

//Второе задание
// var user = prompt("Сколько вам лет?");
// var dod = prompt("Сколько лет опыт работы?");
// var text = user >= 30 && dod >= 3 ? "вы приняты" : "Вы нам не подходите, сори";
// alert (text);



//Третье задание
var summ = Number(prompt("Какую сумму в UAN вы хотите конвертировать?"));
if (!summ) {
     alert('Вы додик');
}
else {
    var conv = prompt("В какую валюту будет произведена конвертация? (USD, EUR)");
    conv = conv.toLowerCase();
    switch (conv) {
        case 'usd':
            alert(summ / 25);
            break;
        case 'eur':
            alert(summ / 29);
            break;
        default:
            alert('Введите правильное значение');
    }
}




