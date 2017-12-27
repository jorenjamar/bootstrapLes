import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html"
})

export class WelcomeComponent{
    private nummer : number = Math.floor((Math.random()*9)+1);
    fotos : number[]  = [1,2,3,4,5,6,7,8,9,10];
    counter : number = this.nummer;
    imageUrl : string = `https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(${this.fotos[this.nummer]}).jpg`;
    
    constructor() { }

    ngOnInit(){
        this.SetImage(this.nummer);

        setInterval(this.ChangeImage, 5000);
    }

    SetImage(getal : number){
        this.imageUrl = `https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(${this.fotos[getal]}).jpg`;
        this.counter = this.nummer;
    }

    ChangeImage = () => {
        this.nummer = Math.floor((Math.random()*10)+1);
        this.SetImage(this.nummer);
        
    }

    ChangeImageOnClick(){
        this.nummer = this.counter;
        this.SetImage(this.nummer);
    }
    
}




