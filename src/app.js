/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "your", "their"];
let adj = ["great", "big", "small", "slow", "fast"];
let noun = ["jogger", "racoon", "computer", "school", "city"];
let cat = [".com", ".net", ".es", ".cat", ".fr"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < cat.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + cat[l]);
      }
    }
  }
}
