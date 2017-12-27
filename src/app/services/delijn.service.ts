import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class DelijnService{
    constructor(private _http: HttpClient){}

    get Lijst() : Observable<ILijnen[]>{
        return this._http.get<ILijnen[]>("https://www.delijn.be/rise-api-core/haltes/vertrekken/200144/7")
    }
}

export interface ILijnen {
    bestemming: string;
    entiteitNummer: number;
    gemeentes?: any;
    haltes?: any;
    id: number;
    internLijnnummer: string;
    kleurAchterGrond: string;
    kleurAchterGrondRand: string;
    kleurVoorGrond: string;
    kleurVoorGrondRand: string;
    lijnGeldigVan?: any;
    lijnNummer: number;
    lijnNummerPubliek: string;
    lijnRichting: string;
    lijnType: string;
    lijnTypeLink: string;
    lijnUrl: string;
    omschrijving: string;
    omschrijvingHighlighted?: any;
    richtingCode: number;
    richtingCodeAndereRichting: number;
    ritNummer: number;
    ritOrder: number;
    vertrekCalendar: any;
    vertrekTijd: string;
    viaBestemming: string;
}

export interface IVertrekken {
    afstand: number;
    bestemmingen?: any;
    coordinaat?: any;
    entiteitNummer: number;
    halteNummer: number;
    halteUrl: string;
    huidigeDag: string;
    huidigeTijd: string;
    id: number;
    interneLijnnummers?: any;
    laatstGebruikt?: any;
    lijnen: ILijnen[];
    name?: any;
    omleidingen?: any;
    omschrijvingGemeente?: any;
    omschrijvingHighlighted?: any;
    omschrijvingKort?: any;
    omschrijvingLang?: any;
    publiek: boolean;
    storingen: any[];
    syncStatus?: any;
    toegankelijkheidsStatus: any[];
}