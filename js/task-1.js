// https://learn.javascript.ru/logical-operators#proverka-logina

// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let login;
let password;

const admin = "Администратор";
const rightPassword = "Я главный";
const cancelledByUser = null;
const emptyString = "";

login = prompt("Введите логин");

// if (login === admin) {
//   password = prompt('Введите пароль');
//   if (password === rightPassword) {
//     alert('Здравствуйте!');
//   } else if (password === cancelledByUser || password === emptyString) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (login === cancelledByUser || login === emptyString) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

switch (login) {
  case admin:
    password = prompt("Введите пароль");
    switch (password) {
      case rightPassword:
        alert("Здравствуйте!");
        break;
      case cancelledByUser || emptyString:
        alert("Отменено");
        break;
      default:
        alert("Неверный пароль");
    }
    break;
  case cancelledByUser || emptyString:
    alert("Отменено");
    break;
  default:
    alert("Я вас не знаю");
}
