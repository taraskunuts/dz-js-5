


function showMessage() {//showMessage підєднаний прямим заязком до html так званого "onchange"тобто "на зміні" на зміні функції в javascript (function showMessage), те саме є в onchange в html
    const select = document.getElementById("drink");//задаємо select елеменд за id "drink"
    const message1 = document.getElementById("messageNumber1");//так само тільки id "message"
    if (select.value === "Кава") {//запитується:"якщо (вибір. значення сувора рівність кава) то "
        message1.textContent = "Вибір:Кава";//до eлемента з id "message" додається контент у вигляді тексту і має значення кава
    } else if (select.value === "Чай") {//те саме що в 4 рядку тільки з чаєм
        message1.textContent = "Вибір:Чай";//до eлемента з id "message" додається контент у вигляді тексту і має значення чай
    } else if (select.value === "Сік") {//те саме що в 4 рядку тільки з соком
        message1.textContent = "Вибір:Сік";//до eлемента з id "message" додається контент у вигляді тексту і має значення сік
    } else {
        message1.textContent = "";//коли нічого з переліченого вище або вибір "--Виберіть--" зроблено
    }
}//P.S. Знання з css/html та згадка про мою фільтрацію над якою я старався стільки часу(до речі вона уже працює) дуже помогла, + властивість "onchange"



function checkDay() {// те саме що й в функції function showMessage() тільки function checkDay() і вона підключена до кнопки з властивістю onclick(при кліку)
    const dayInput = document.getElementById("dayInput").value.trim().toLowerCase();//щоб не було збоїв по типу " По НеДІл о К" не читається, додаємо .value.trim() .value потрібно щоб значення бралося з html і з ним робилися маніпуляціЇ (в даному випадку маніпуляції є 2: trim()видаляє пробіли, і toLowerCase() всі букви верхнього розряду перетворює на нажнього. якщо звісно не знайдеться якийсь троль і не поставить замість пробілу невидимий знак)
    const message2 = document.getElementById("messageNumber2");
    const weekdays = ["понеділок", "вівторок", "середа", "четвер", "п’ятниця"];//задаємо  всі не вихдні дні як значення
    const weekends = ["субота", "неділя"];
    if (weekdays.includes(dayInput)) {//питаємо "чи щось з переліченого в weekdays є в цьому реченні тобто беремо інформацію з input-а в html"
        message2.textContent = "Це робочий день.";
    } else if (weekends.includes(dayInput)) {//те саме тільки з weekends тобто вихідними
        message2.textContent = "Це вихідний день.";
    } else {
        message2.textContent = "Введено невірний день тижня. Спробуйте ще раз.";
    }
}



function checkSeason() {// теж зв'язано з html onclick
    const month = parseInt(document.getElementById("monthInput").value.trim());//тут обійдемося без toLowerCase бо цифри нижнього порядку не існує (тільки нижній або верхній степінь)
    const message3 = document.getElementById("messageNumber3");
    if (month >= 1 && month <= 12) {
        if (month === 12 || month === 1 || month === 2) {
            message3.textContent = "Це зима";//зима 
        } else if (month >= 3 && month <= 5) {
            message3.textContent = "Це весна";//весна 
        } else if (month >= 6 && month <= 8) {
            message3.textContent = "Це літо";//літо
        } else if (month >= 9 && month <= 11) {
            message3.textContent = "Це осінь";//осінь 
        }// і їх весь час
    } else {//по колу носиить
        message3.textContent = "Введено некоректний номер місяця. Введіть число від 1 до 12.";
    }
}



function checkDaysInMonth() {
    const month = parseInt(document.getElementById("monthDaysInput").value.trim());//я тепер знаю чому mondays так звуть (monthDays)
    const message4 = document.getElementById("messageNumber4");
    if (month >= 1 && month <= 12) {
        let days;
        switch (month) {
            case 2:
                days = "28 або 29 (високосний рік)";
                break;
            case 4: case 6: case 9: case 11:
                days = 30;
                break;
            default:
                days = 31;
        }
        message4.textContent = `У цьому місяці ${days} днів.`;
    } else {
        message4.textContent = "Введено некоректний номер місяця. Введіть число від 1 до 12.";
    }
}



function checkColor() {
    const color = document.getElementById("colorInput").value.trim().toLowerCase();
    const message5 = document.getElementById("messageNumber5");
    switch (color) {
        case "червоний":
            message5.textContent = "Стоп";
            break;
        case "жовтий":
            message5.textContent = "Чекати";
            break;
        case "зелений":
            message5.textContent = "Йти";
            break;
        default:
            message5.textContent = "Невідомий колір. Введіть червоний, жовтий або зелений.";
    }
}//та сама конструкція



function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const message6 = document.getElementById("messageNumber6");
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        message6.textContent = "Будь ласка, введіть обидва числа.";
        return;
    }
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                message6.textContent = "Помилка: ділення на нуль неможливе.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            message6.textContent = "Невідома операція.";
            return;
    }
    message6.textContent = `Результат: ${result}`;
}