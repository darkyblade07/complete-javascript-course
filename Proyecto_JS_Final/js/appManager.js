import { scoresViewController } from "../viewControllers/scores/scoresViewController";

export class appManager {
    constructor() {
        this.appContainer= document.getElementById('appContainer');
        this.menuViewController = new menuViewController(this, this.appContainer, 'Menu');
        this.scoresViewController = null;
        this.gameViewController = null;

    }

    showScores(){
        this.scoresViewController = new scoresViewController(this, this.appContainer, 'Scores');
    }

    showGame(){
        this.gameViewController = new gameViewController(this, this.appContainer, 'Game'); 
    }

    removeGame(){
        this.appContainer.removeChild(this.gameViewController.removeChild.mainContainer);
    }

    removeVC(viewController){
        this.appContainer.removeChild(viewController.mainContainer);
    }
}