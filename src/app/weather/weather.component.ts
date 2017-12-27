import { Component } from "@angular/core";

@Component({
    selector: 'app-weather',
    templateUrl: "./weather.component.html"
})

export class WeatherComponent{
    data: IWeather = {
        "location": "Antwerpen", 
        "description" : "zonning",
        "temperature" : 21,
        "sunrise": new Date(2017,1,1,8,10),
        "sunset" : new Date(2017,1,1,21,25)
      }
}

interface IWeather{
    location: string;
    description: string;
    temperature: number;
    sunrise: Date;
    sunset: Date;
  }