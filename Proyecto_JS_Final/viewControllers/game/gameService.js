import { card, card } from "../../js/models/card";

export class gameService{
    constructor(viewController){
        thid.viewController = viewController;
    }


    getcards(){
var request = new x
var request = new XMLHttpRequest();
request.open('GET', '')
request.onload = this.getcardsCompleted.bind(this);
request.send();
    }

    getcardsCompleted(e){
        var cards = [];
     var cardData = JSON.parse(request.response)
     cardData.cards.array.array.forEach(cardData => {
        var card = new card(cardData.id, cardData.icon, false)
        cards.push(card);
     });
 this.viewController.start(cards)   }
}