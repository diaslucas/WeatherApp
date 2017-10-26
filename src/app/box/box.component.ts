import { Component } from "@angular/core";
import { BoxService } from "./box.service";

@Component({
    moduleId: module.id,
    selector: 'box',
    templateUrl: './box.component.html'
})

export class BoxComponent{

    panels = [];
    service: BoxService;
    city: string = '';
    woeid: number = 0;
    state: string = '';
    
    constructor(service: BoxService) {
       
        this.service = service;
        this.getLocation();

    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

                this.service.getCity(position.coords.latitude,position.coords.longitude).subscribe(city => {
                    this.city = city[0].title;
                    this.woeid = city[0].woeid;

                    this.service.getWeather(this.woeid).subscribe(weather => {
                        this.panels = weather.consolidated_weather;
                        this.state = weather.parent.title;
                        console.log(this.panels);
                    });

                }, error => console.log(error));

            });
        } else {
            alert("Sorry, geolocation is not supported by this browser.");
        }
    }

    convertCelsiustoFahrenheit(celsius){
        return (celsius * 1.8 + 32).toFixed();
    }

    getDayName(date) {

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        date = this.parseDate(date);
        let dayName = days[date.getDay()];
        let today = new Date();        

        if(today.toDateString() == date.toDateString()){
            return 'Today';
        }
        
        return dayName;
        
    }

    parseDate(date) {

        var parts = date.match(/(\d+)/g);
        return new Date(parts[0], parts[1]-1, parts[2]); 

    }


    
}