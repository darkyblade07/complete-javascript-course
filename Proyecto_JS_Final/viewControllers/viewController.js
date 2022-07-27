import { view } from "../js/view/view.js";

export class viewController extends view {
    constructor(appManager, parent, title = ''){
        super(parent);
        this.appManager = appManager;
        this.mainContainer = document.createElement('div');
        this.navigationBar = document.createElement('div');
        this.contentContainer = document.createElement('div');

        this.parent.appendChild(this.mainContainer);

        this.mainContainer.appendChild(this.navigationBar);
        this.mainContainer.appendChild(this.contentContainer);


        this.mainContainer.className = 'mainContainer';
        this.navigationBar.className = 'navigationBar';
        this.contentContainer.className = 'contentContainer';



this.backBTN = document.createElement('buttom');
this.backBTN.innerHTML = 'BACK';
this.navigationBar.appendChild(this.backBTN);

this.titlelbl = document.createElement('p');
this.titlelbl.innerHTML = title;
this.navigationBar.appendChild(this.titlelbl);
this.titlelbl.className = 'titlelbl';

remove(){
    this.appManager.removeVC(this);
}
    }
}