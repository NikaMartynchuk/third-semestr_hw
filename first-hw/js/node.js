let age = 14;
console.log (age);

let name = 'Nika';
console.log (name);

let isStudent = true;
console.log (isStudent);

let myString = 'Success is not final, failure is not fatal: It is the courage to continue that counts.';
console.log (myString);

let myNumber = 14;  
myNumber = myNumber + 10;   
console.log(myNumber);   

let myNull = null;   
console.log(myNull); 



const userName = prompt("Введіть тут своє ім'я:"); 
if (userName) {  
    alert("Вітаю, " + userName + "!");  
} else {
    alert("Ім'я не введено.");
}
console.log(userName); 



let confirmation = confirm("Ви хочете підтвердити дію?");  
if (confirmation) {
    alert("Дякую за підтвердження!");  
} else {
    alert("Дію відмінено!"); 
}
console.log(confirmation);



alert("Увага! Дія небезпечна.");  
let dangerConfirmation = confirm("Ви впевнені, що хочете продовжити?");  
if (dangerConfirmation) {
    alert("Дякую за підтвердження!"); 
} else {
    alert("Дію відмінено!");  
}
console.log(dangerConfirmation);
