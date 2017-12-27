import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { DelijnComponent } from './delijn/delijn.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calc/calc.component';
import { GameComponent } from './game/game.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DelijnService } from './services/delijn.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    DelijnComponent,
    WelcomeComponent,
    CalculatorComponent,
    GameComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "game", component : GameComponent},
      {path: "home", component : HomeComponent},
      {path: "calc", component : CalculatorComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", component : PageNotFoundComponent},
    ], {useHash: true}),
    MDBBootstrapModule.forRoot(),
    HttpClientModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DelijnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
