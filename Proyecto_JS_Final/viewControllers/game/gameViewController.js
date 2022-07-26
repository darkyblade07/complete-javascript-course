import { viewController } from "../viewController.js";

export class gameViewController extends viewController {
    constructor(appManager, parent , title = ''){
        super(appManager, parent , title);
        this.mainContainer.classList.add = ('gameViewController');
    }
    show(){


    }

    hide(){

    }
}