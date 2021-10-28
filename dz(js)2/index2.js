
function game(){
let min = parseInt(prompt("задайте минимально число от 0 до 10!"));
let max = parseInt(prompt("Задайте максимальное число от 11 до 20!!")); 
if(min < 10 && max < 20 && max > 10 ){
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
 
}
else{
  alert("что-то пошло не так...");
  
}
console.log(random);


let life = 4;

while((life > 0) && (namber !== random)){
  var namber =  +prompt("Угадайте число в заданом диапазоне")
if (namber !== random ){
  life --
  alert("Попробуйте еще раз, у вас осталось" + " " + life + " " + "жизней")
} 
}
 
if (namber == random && namber > 0) { alert("Молодец, ты выиграл!")

} else if (life === 0) {alert("Простите, вы проиграли =(")
  
  }

}
