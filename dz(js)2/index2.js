
function game(){
let range_from = parseInt(prompt("задайте минимально число от 0 !"));
let range_to = parseInt(prompt("Задайте максимальное число не больше 10 от первого !!")); 
if( range_from + 11 > range_to){
  var random = Math.floor(Math.random() * (range_from - range_to) + range_to);;
  console.log(random);
}
else{
  alert("что-то пошло не так...");
}


let life = 4;
while((life > 0) && (namber !== random)){
  var namber =  +prompt("Угадайте число в заданом диапазоне")
if(namber == 0){
  break;
}
if(namber !== random ){
  life --
  alert(" У вас осталось" + " " + life + " " + "жизней")
} 
}
 
if (namber == random && namber > 0) { alert("Молодец, ты выиграл!")

} else if (life === 0) {alert("Простите, вы проиграли =(")
  
  }

 }   
 