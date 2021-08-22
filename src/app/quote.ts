export class Quote {
    // username:string;
    // author:string;
    // name:string;
    showDetails :boolean;
    constructor(public username:string,public author:string,public name:string,public completeDate:Date){
        this.showDetails=false;
    }

}
