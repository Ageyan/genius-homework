// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//     name: "Dima",
//     age: 32,
//     logInfo: function (speciality, average_score, number_of_missed_classes) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Speciality is : ${speciality}`);
//         console.log(`Average score is : ${average_score}`);
//         console.log(`Number of missed classes is : ${number_of_missed_classes}`);
//         console.groupEnd();
//     },
// };

// const Andrey = {
//     name: 'Andrey',
//     age: 29,
// };

// const Oleg = {
//     name: 'Oleg',
//     age: 28,
// };

// const Igor = {
//     name: 'Igor',
//     age: 27,
// };

// studentInfo.logInfo.bind(Andrey, "International relations", "9/10", "7")();
// studentInfo.logInfo.call(Oleg, "Sociology", "6/10", "28");
// studentInfo.logInfo.apply(Igor, ["Medicine", "8/10", "16"]);


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function html() {
//     alert("HTML (HyperText Markup Language) – це мова розмітки гіпертексту, яку використовують для створення веб-сторінок. Вона визначає структуру та зміст сторінки, вказуючи браузеру, як відображати текст, зображення, посилання та інші елементи.");
// };

// function css() {
//     alert("CSS (Cascading Style Sheets) - це мова стилів, яка використовується для налаштування вигляду веб-сторінок. Вона дозволяє змінювати кольори, шрифти, розміри, розташування елементів та багато іншого, щоб зробити сторінку візуально привабливою та зручною для користувачів. ");
// };

// document.querySelector('#html').addEventListener('click', html);
// document.querySelector('#css').addEventListener('click', css);
// АБО
// document.querySelector('#html').onclick = html;
// document.querySelector('#css').onclick = css;

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const infoShop = {
//     name: 'Tomato',
//     priceKg: '50',
//     amount: "8.5",
//     showInfo: function () {
//         return(this.name + " за такої кількості коштуватимуть : " + Number(this.amount * this.priceKg).toFixed(1) + " гривень");
//     },
// };

// const banana = {
//     name: "Bananas",
//     priceKg: 30,
//     amount: 4.5,
// };

// const cherry = {
//     name: "Cherrys",
//     priceKg: 58,
//     amount: 1.3,
// };

// const orange = {
//     name: "Oranges",
//     priceKg: 89,
//     amount: 3.4,
// };

// const ban = infoShop.showInfo.call(banana);
// console.log(ban);
// const cher = infoShop.showInfo.call(cherry);
// console.log(cher);
// const oran = infoShop.showInfo.call(orange);
// console.log(oran);

// АБО

// function shop() {
//     let name = prompt("Введіть назу товару: ");
//     let priceKg = Number(prompt("Введіть вартість за кілограм: "));
//     let amount = Number(prompt("Введіть вагу потрібного товару (в кг): "));
//     alert(`${name} за такої кількості коштуватимуть : ${(amount * priceKg).toFixed(1)} грн`);
// }

// shop();

