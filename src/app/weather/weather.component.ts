import { Component } from "@angular/core";
import {WeatherService, RootObject} from "../services/weather.service"
import { OnInit, OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-weather',
    templateUrl: "./weather.component.html"
})

export class WeatherComponent implements OnChanges{
    /*data: IWeather = {
        "location": "Antwerpen", 
        "description" : "zonning",
        "temperature" : 21,
        "sunrise": new Date(2017,1,1,8,10),
        "sunset" : new Date(2017,1,1,21,25)
      }*/

      weerLijst : RootObject;

      constructor(private service: WeatherService){
          
      }

      ngOnChanges(){
        this.service.getWeer().subscribe(d => this.weerLijst = d);
      }
}
/*
interface IWeather{
    location: string;
    description: string;
    temperature: number;
    sunrise: Date;
    sunset: Date;
  }*/