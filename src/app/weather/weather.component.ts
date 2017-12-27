import { Component } from "@angular/core";
import {WeatherService, RootObject, Weather} from "../services/weather.service"
import { OnInit} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-weather',
    templateUrl: "./weather.component.html"
})

export class WeatherComponent implements OnInit{
    /*data: IWeather = {
        "location": "Antwerpen", 
        "description" : "zonning",
        "temperature" : 21,
        "sunrise": new Date(2017,1,1,8,10),
        "sunset" : new Date(2017,1,1,21,25)
      }*/

      weerLijst : IWeather;

      constructor(private service: WeatherService){
          
      }

      ngOnInit(){
        this.service.getWeer().subscribe(d => this.weerLijst = this.MapResults(d));
      }

      private MapResults(d : RootObject) : IWeather{
        return{
            location: d.name,
            description: d.weather[0].description,
            temperature: d.main.temp,
            sunrise: new Date(d.sys.sunrise * 1000),
            sunset: new Date(d.sys.sunset * 1000)
        }
      }
}

interface IWeather{
    location: string;
    description: string;
    temperature: number;
    sunrise: Date;
    sunset: Date;
  }