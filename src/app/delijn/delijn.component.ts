import { Component } from "@angular/core";
import { DelijnService, ILijnen } from "../services/delijn.service";

@Component({
    selector: "app-delijn",
    templateUrl: "./delijn.component.html"
})

export class DelijnComponent{
    
    /*vertrekken : ILijnen[] =
    [
    {
    bestemming:"Antwerpen",
    lijnNummer: 322,
    vertrekTijd: new Date(2017, 10,16, 15,10)
    },
    {
    bestemming:"Brussel",
    lijnNummer: 546,
    vertrekTijd: new Date(2017, 10,16, 15,30)
    },
    {
    bestemming:"Charleroi",
    lijnNummer: 941,
    vertrekTijd: new Date(2017, 10,16, 15,32)
    }
    ]*/

    lijst : ILijnen[];

    constructor(private service: DelijnService){ }

    ngOnInit(){
        this.service.Lijst.subscribe(result => this.lijst = result);
    }
}

/*
interface ILijnen{
    bestemming: string,
    lijnNummer: number,
    vertrekTijd: Date;
}
*/