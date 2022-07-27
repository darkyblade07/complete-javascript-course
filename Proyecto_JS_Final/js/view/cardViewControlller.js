import { view } from "./view.js";

export class cardView extends view {
    constructor(parent, card){
        super(parent)
        this.card = card;
        this.mainContainer.classList.add('cardView_mainContainer');
this.mainContainer.innerHTML = card.icon;
    }
show()
}