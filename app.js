// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let var1 = "hello";
let var2 = "owu";
let var3 = "com";
let var4 = "ua";
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

console.log(var1,var2,var3,var4,var5,var6,var7,var8, var9, var10,var11,var12,var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Artem";
let middleName = "Dmytrovych";
let lastName = "Marchenko";

console.log(`${firstName} ${middleName} ${lastName}`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let namePrompt = prompt("Enter you name:")
console.log(namePrompt);
let middlePrompt = prompt("Enter you middleName:")
console.log(middlePrompt);
let agePrompt = prompt("Enter you age:")
console.log(agePrompt);
