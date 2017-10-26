import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { BoxComponent } from "./box.component";
import { Observable } from "rxjs";

@Injectable()
export class BoxService {

    http: Http;
    headers: Headers;
    url: string = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";
    searchCityUrl: string = "search/?lattlong=";

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");

    }

    getCity(lat, long) {

        return this.http.get(this.url + this.searchCityUrl + lat + ',' + long).map(res => res.json());

    }

    getWeather(woeid) {

        return this.http.get(this.url + woeid).map(res => res.json());

    }


}

