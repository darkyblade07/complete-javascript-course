export class viewController {
    constructor(appManager, parent, title = ''){
        this.appManager = appManager;
        this.parent = parent;
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