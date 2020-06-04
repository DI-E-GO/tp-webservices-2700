import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; 
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
        'X-RapidAPI-Key': '0dafb4b66emsh267c5f084370995p1480aejsn80037e6d2c28'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions); 
  }
}
