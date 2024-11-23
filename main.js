const yourChoice = prompt("Виберіт: Кава Чай Сік");
switch (yourChoice) {
  case 'Кава':
    alert('Ви вибрали каву');
    break;
  case 'Чай':
    alert('Ви вибрали чай');
    break;
  case 'Сік':
    alert('Ви вибрали сік');
    break;
  default:
    alert('Виберіть напій');
    break;
}




const day = prompt("Який сьогодні день тижня?");
switch (day.toLowerCase().trim()) {
  case 'понеділок':
  case 'вівторок':
  case 'середа':
  case 'четвер':
  case 'пятниця':
    alert('Це будній день');
    break;
  case 'субота':
  case 'неділя':
    alert('Це вихідний день');
    break;
  default:
    alert('Ви ввели некоректний день тижня');
    break;
}







const month = prompt("Введіть місяць");
const typedMonth = month.toLowerCase().trim();
switch (typedMonth) {
  case 'грудень':
  case 'січень':
  case 'лютий':
    alert('Це зима');
    break;
  case 'березень':
  case 'квітень':
  case 'травень':
    alert('Це весна');
    break;
  case 'червень':
  case 'липень':
  case 'серпень':
    alert('Це літо');
    break;
  case 'вересень':
  case 'жовтень':
  case 'листопад':
    alert('Це осінь');
    break;
  default:
    alert('Введіть місяць');
    break;
}




let monthDays = prompt("Введіть місяць");
const january = 31;
const february = 28;
const march = 31;
const april = 30;
const may = 31;
const june = 30;
const july = 31;
const august = 31;
const september = 30;
const october = 31;
const november = 30;
const december = 31;
let daysInMonth;
switch(monthDays) {
  case '1':
    daysInMonth = january;
    break;
  case '2':
    daysInMonth = february;
    break;
  case '3':
    daysInMonth = march;
    break;
  case '4':
    daysInMonth = april;
    break;
  case '5':
    daysInMonth = may;
    break;
  case '6':
    daysInMonth = june;
    break;
  case '7':
    daysInMonth = july;
    break;
  case '8':
    daysInMonth = august;
    break;
  case '9':
    daysInMonth = september;
    break;
  case '10':
    daysInMonth = october;
    break;
  case '11':
    daysInMonth = november;
    break;
  case '12':
    daysInMonth = december;
    break;
  default:
    alert("Будь ласка введіть правильний місяць");
    break;
}

if (daysInMonth) {
  alert(`У ${monthDays} місяці кількість днів ${daysInMonth}`);
}

const color = prompt("Введіть колір червоний жовтий або зелений");
const colorLower = color.toLowerCase().trim;
switch (colorLower) {
  case 'червоний':
    console.log('Стоп');
    break;
  case 'зелений':
    console.log('Йти');
    break;
  case 'жовтий':
    console.log('Чекати');
    break;
  default:
    console.log('Ви ввели некоректний колір.');
    break;
}



let result = parseFloat(prompt("Введіть перше число:"));
let howDiyaTranslates = prompt("Виберіть дію (+, -, *, /):");
let secondNumber = parseFloat(prompt("Введіть друге число:"));
if (howDiyaTranslates !== "+" && howDiyaTranslates !== "-" && howDiyaTranslates !== "*" && howDiyaTranslates !== "/") {
  alert("виберіть числовий оператор: +-*/");
} else {
  if (howDiyaTranslates === "/" && secondNumber === 0) {
    alert("ділення на нуль неможливе");
  } else {
    switch(howDiyaTranslates) {
      case "+":
        result += secondNumber;
        break;
      case "-":
        result -= secondNumber;
        break;
      case "*":
        result *= secondNumber;
        break;
      case "/":
        result /= secondNumber;
        break;
    }
    alert(`Результат: ${result}`);
  }
}
//ладно 



















































































































































































































































































































































































































































































































































































































































































































































































































































//посхалко :D 