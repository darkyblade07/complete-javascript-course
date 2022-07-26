import { card } from "../../js/models/card.js";
import { viewController } from "../viewController.js";
import { gameService } from "./gameService.js";

export class gameViewController extends viewController {
    constructor(appManager, parent, title = '') {
        super(appManager, parent, username);
        this.mainContainer.classList.add = ('gameViewController');
      this.service = new gameService(this)
this.cards = [];
        var hubContainer = document.createElement('div');
        this.cardContainer = document.createElement('div');

        hubContainer.className = 'gameViewController.hubContainer'
        this.contentContainer.appendChild(hubContainer);
        this.contentContainer.appendChild(this.cardContainer);
        this.clicksLbl = document.createElement('p');
        hubContainer.appendChild(this.clicksLbl);
        this.timeLbl = document.createElement('p');
        hubContainer.appendChild(this.timeLbl);
        this.clicksLbl.innerHTML = 'Clicks:0'
        this.timeLbl.innerHTML = 'Time: 0'
        this.clicksLbl.className = 'gameViewController_clicksLbl'
        this.timeLbl.className = 'gameViewController_timeLbl'
        this.resetBtn = document.createElement('buttom');
        this.resetBtn.className = 'gameViewController_resetBtn'
        hubContainer.appendChild(this.resetBtn);
        this.resetBtn.innerHTML = 'Reset'

        this.contentContainer.classadd = ('gameViewController.contentContainer')
        
       this.resetBtn.onclick = this.reset.bind(this);
     
       this.service.getcards();
       
    }  
    
    
    star(cards){
this.cards = cards
this.cards.forEach(card => {
    var cardContainer = document.createElement('div');
    cardContainer.innerHTML = card.id
    cardContainer.className = 'gameViewController_card'
    this.cardContainer.appendChild(cardContainer)
});
    }
    
    
    reset(){
            
    }
    show() {


    }

    hide() {

    }
}