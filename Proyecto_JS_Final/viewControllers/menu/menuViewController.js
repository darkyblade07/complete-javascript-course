import { viewController } from "../viewController.js";

export class menuViewController extends viewController {
    constructor(appManager ,parent , title = ''){
        super(appManager, parent , title);
        this.mainContainer.classList.add = ('menuViewController');
        this.backBTN.hidden = true;

        this.text1lbl = document.createElement('p');
        this.text2lbl = document.createElement('p');
        this.usernameIn = document.createElement('input');
        this.playBtn = document.createElement('buttom');
        this.scoresBtn = document.createElement('buttom');

        this.contentContainer.appendChild(text1lbl);
        this.contentContainer.appendChild(text2lbl);
        this.contentContainer.appendChild(this.usernameIn);
        this.contentContainer.appendChild(playBtn);
        this.contentContainer.appendChild(scoresBtn);

this.contentContainer.className = ('menuViewController_contentContainer');
        text1lbl.innerHTML = 'Card Memory Game';
        text2lbl.innerHTML = 'Enter Username to play';
        this.usernameIn.placeholder = 'Username';
        playBtn.innerHTML = 'Play';
        scoresBtn.innerHTML = 'Scores';
        text1lbl.className = 'text1lbl';
        text2lbl.className = 'text2lbl';
        usernameIn.className = 'usernameIn';
        playBtn.className = 'playBtn';



        playBtn.onclick = this.onplayBtn.bind(this);
        scoresBtn.onclick = this.onscoresBtn.bind(this);

    onplayBtn();{

        this.appManager.showGame();

    }



    onscoresBtn();{
this.appManager.showScores();
    }



    show();{


    }

    hide();{

    }
}
}