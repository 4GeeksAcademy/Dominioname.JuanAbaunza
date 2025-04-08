import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  console.log("Hello Rigo from the console!");

  for (const a of pronoun) {
    for (const b of adj) {
      for (const c of noun) {
        console.log(a + b + c + '.com');
      }
      
    }
    

  }
};


