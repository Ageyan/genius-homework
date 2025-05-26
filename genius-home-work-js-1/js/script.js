// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let a = 1;
// let a = 0;
// let a = -3;

// if (a > 0) {
//     console.log(true);
// } else if (a === 0){
//     console.log("Умова для a = 0 не вказана в задачі");
// } else {
//     console.log(false);
// };

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true.

// let value = 'test';
// let value = "qwerty";
// let value = true;

// if (value === "test") {
//     console.log(true);
// } else {
//     console.log(false);
// };

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let a = 1;
// let a = 10;
// let a = 13;

// if (a > 10) {
//     console.log(a - 5);
// } else if (a === 10) {
//     console.log("Умова для a = 10 не вказана в задачі");
// } else {
//     console.log(a + 5);
// };

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const variable = prompt("Введіть число від 1 до 12");
// let month;

// switch (variable) {
//     case "1":
//         month = "Січень";
//         alert(`${month}`);
//         break;
//     case "2":
//         month = "Лютий";
//         alert(`${month}`);
//         break;
//     case "3":
//         month = "Березень";
//         alert(`${month}`);
//         break;
//     case "4":
//         month = "Квітень";
//         alert(`${month}`);
//         break;
//     case "5":
//         month = "Травень";
//         alert(`${month}`);
//         break;
//     case "6":
//         month = "Червень";
//         alert(`${month}`);
//         break;
//     case "7":
//         month = "Липень";
//         alert(`${month}`);
//         break;
//     case "8":
//         month = "Серпень";
//         alert(`${month}`);
//         break;
//     case "9":
//         month = "Вересень";
//         alert(`${month}`);
//         break;
//     case "10":
//         month = "Жовтень";
//         alert(`${month}`);
//         break;
//     case "11":
//         month = "Листопад";
//         alert(`${month}`);
//         break;
//     case "12":
//         month = "Грудень";
//         alert(`${month}`);
//         break;
    
//     default:
//         alert(`Ви ввели некоректне число`)
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const input = prompt("Введіть тризначне число:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     const num1 = Math.floor(number / 100);       
//     const num2 = Math.floor((number % 100) / 10);   
//     const num3 = number % 10;                       

//     const sum = num1 + num2 + num3;

//     alert(`Сума цифр: ${sum}`);
// } else {
//     alert("Це не тризначне число");
// }