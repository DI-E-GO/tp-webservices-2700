import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public listHoroscopo():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'zodiac-sign.p.rapidapi.com',
        'X-RapidAPI-Key': '0dafb4b66emsh267c5f084370995p1480aejsn80037e6d2c28'
      })
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs?endpoint=apiendpoint_517b0785-d9e9-4a90-bb92-eff5e806eb44", httpOptions); 
  }
}
