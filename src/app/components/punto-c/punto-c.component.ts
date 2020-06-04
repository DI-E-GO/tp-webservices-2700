import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {

  horoscopo:Horoscopo;
  horoscopos:Array<Horoscopo>;

  constructor(private horscopoService: HoroscopoService) { 
    this.horoscopo = new Horoscopo();
    this.horoscopos = new Array<Horoscopo>();
  }

  ngOnInit(): void {
    this.cargarListaHoroscopo();
  }

  cargarListaHoroscopo(){
    this.horscopoService.listHoroscopo().subscribe(
      (result) =>{
        this.horoscopos = new Array<Horoscopo>();
        result.forEach(element => {
          this.horoscopo = new Horoscopo();
          Object.assign(this.horoscopo, element);
          this.horoscopos.push(this.horoscopo);
        });
        console.log(this.horoscopos)
      },
      error => {alert("Error en la peticion");}
    )
  }
}
