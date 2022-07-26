import { viewController } from "../viewController.js";

export class scoresViewController extends viewController {
    constructor(appManager, parent , title = ''){
        super(appManager, parent , title);
        this.mainContainer.classList.add = ('scoresViewController');
        this.mainContainer.style.left = '200px';

        this.backBTN.onclick = this.remove.bind(this);
    }
    show(){


    }

    hide(){


        
    }

    remove(){
this.appManager.removeScores();


    }
}


