import { Component } from "@angular/core";
import { ViewChild } from "@angular/core/src/metadata/di";


@Component({
    selector: "app-game",
    templateUrl : "./calc.component.html",
    styleUrls : ["./calc.component.css"]
})

export class CalculatorComponent{
    counter : number = 0;
    coords : string;

    Increment(){
        this.counter += 1;
    }

    SetCounter(inge : number){
        
        this.counter = inge;
    }

    DoSomething(event : MouseEvent){
        let xPos = event.clientX;
        let yPos = event.clientY;
        this.coords = xPos + "/" + yPos;
    }
}