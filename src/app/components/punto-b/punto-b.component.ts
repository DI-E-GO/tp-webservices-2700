import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {
  categoria:string;
  noticia:Noticia;
  noticias:Array<Noticia>;
  constructor(private noticiaService: NoticiaService) {
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
   }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  public cargarNoticias(){
    this.noticiaService.listNoticias("soccer").subscribe(
      (result) =>{
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
      },
      error => {alert("Error en la peticion");}
    )
  }
}
