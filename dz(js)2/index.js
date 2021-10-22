// task 1
let a = +prompt("первое число");
let b = +prompt("Второе число");
let c = +prompt("Третее число");

alert( a + b + c + " " + typeof a )

// task 2

let d = +prompt("Введите число"), e = +prompt("Введите число");
let z = d + e;

switch(z){
  case 1:
  case 2:
  case 3:
  case 4:
         alert("Ваше число больше 0 меньше 5")
  break;
  case 5:
        alert("Ваше число 5")
  break;
  case 6:
  case 7:
  case 8:
  case 9:
      alert("Ваше число больше 5 меньше 10")
      break;
  case 10:
      alert("Ваше число 10")
      break;
  case 11:
  case 12:
  case 13:
  case 14:
      alert("Ваше число больше 10 меньше 15")
      break;
  case 15:
      alert("Ваше число 15")
      break;
      default:
      alert("Ошибка!!!!")
}

// task 3

let p = +prompt("Вкажите сторону трикутника!")
if( p > 0 ){
    alert(3 * p);
} 
else{
    alert("Введите число!")
}