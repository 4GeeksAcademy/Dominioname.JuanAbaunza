import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  console.log("Hello Rigo from the console!");

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        console.log(a + b + c + '.com');
      }
      
    }
    

  }
};


