import { Component } from "@angular/core";
import { DelijnService, ILijnen, IVertrekken } from "../services/delijn.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: "app-delijn",
    templateUrl: "./delijn.component.html"
})

export class DelijnComponent implements OnInit{
    
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

    lijst : IVertrekken;

    constructor(private service: DelijnService){ }

    ngOnInit(){
        this.service.getLijst().subscribe(result => this.lijst = result);
    }
}

/*
interface ILijnen{
    bestemming: string,
    lijnNummer: number,
    vertrekTijd: Date;
}
*/