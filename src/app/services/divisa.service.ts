import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  
  constructor(private _http: HttpClient) { }

  public getExchange(valor:number,desde:string,a:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
        'X-RapidAPI-Key': '0dafb4b66emsh267c5f084370995p1480aejsn80037e6d2c28'
      })
    };
    return this._http.get("https://currency-converter5.p.rapidapi.com/currency/convert?amount="+valor+"&from="+desde+"&to="+a, httpOptions);
  }
}

