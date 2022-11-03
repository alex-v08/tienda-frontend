import { Card } from "../Card/Card";
import "./styles/cards.css";

export const Cards = (cards) => {
    console.log(cards)
  return `<div id="cards">${(cards.map(card => Card(card))).join(" ")}</div>`; 
};
