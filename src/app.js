import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  console.log("Hello Rigo from the console!");

  for (const theour of pronoun) {
    for (const greatbig of adj) {
      for (const joggerracoon of noun) {
        console.log(theour + greatbig + joggerracoon + '.com');
      }
      
    }
    

  }
};


