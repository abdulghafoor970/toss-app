// console.log("Hello Loop");

// const fruitInput = document.querySelector("#fruitInput")
// const showFruits = document.querySelector("#showFruits")

// function done() {
//     console.log(fruitInput.value);
// showFruits.innerHTML += `<li>${fruitInput.value}, </li>`

//     fruitInput.value = "";
    

    
// }


// round
// ceil
// floor
// random
// parseint
// parsefloat
// tofixed

// let str = "45.0089"
// console.log(Math.round(20.4));
// console.log(Math.ceil(20.1));
// console.log(Math.floor(20.4));
// console.log(Math.random()*5);

// console.log(parseInt(str));
// console.log([parseFloat(str)]);


// let num = 23.0699;
// console.log(num.toFixed(1));

let result = document.querySelector("#result");
let img = document.querySelector("#image")


function toss(selected){
   console.log(selected);
//    result.innerHTML += selected
let random = (Math.ceil(Math.random()*2));
console.log(random);
if (
    (selected === "masjid" && random === 1 ) ||
    (selected === "chand" && random === 2 )

){
    console.log(" you won the toss ");
    result.innerHTML = "you won the toss"
    
}else {
 console.log("you loss the toss ");   
 result.innerHTML = "you loss the toss"

}
// if (random === 1 ){
//     img.src = "rz3kukole.jpg" 
// }else {
//     img.src = "chand.jpg"
// }

  if (random === 1) {
    img.src = "masjid2.jpg";
  } else {
    img.src =
      "chand.jpg";
  }
   
   
}











