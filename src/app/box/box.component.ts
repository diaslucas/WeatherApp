import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'box',
    templateUrl: './box.component.html'
})

export class BoxComponent{

    numbers;


    constructor(){
       
        this.numbers = [1,2,3,4,5,6];
        this.getLocation();
        
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }


    showPosition(position) {
        console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
    }
    
}