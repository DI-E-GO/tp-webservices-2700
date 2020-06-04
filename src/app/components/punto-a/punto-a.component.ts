import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {

  valor: number;
  desde: string;
  a: string;
  total: number;
  divisa: Divisa;
  divisas: Array<any>;
  resultado: Array<Divisa>;

  /*moneda1:string;
  moneda2:string;
  monto:string;
  divisa:Divisa;*/

  //vector_divisas: Array<Divisa>;
  constructor(private cambioService: DivisaService) {
    //this.vector_divisas = new Array<Divisa>();
    this.divisa = new Divisa();
    this.divisas = new Array<any>();
    this.resultado = new Array<Divisa>()
  }

  ngOnInit(): void {
  }
  public cambiarMoneda() {
    this.cambioService.getExchange(this.valor, this.desde, this.a).subscribe(
      (result) => {
        this.divisas = new Array<any>();
        this.resultado = new Array<Divisa>()
        this.divisas = result['rates'];
        this.divisa = this.divisas[this.a];
        this.resultado.push(this.divisa);
        this.total = this.resultado[0].rate_for_amount;
      }
    )
  }
  /*
    convertirDivisa(){
      const divisa = {
        fromtype: this.moneda1,
        totype: this.moneda2,
        fromvalue: this.monto
      };
      this.divisaService.convertirDivisa(divisa)
      .subscribe((nuevaConver) =>{
        console.log(nuevaConver);
      });
    }
    public convertirMoneda(){
      this.divisaService.converciones(this.moneda1,this.moneda2,this.monto).subscribe(
        (result) => {
          this.vector_divisas = new Array<Divisa>();
          result['properties'].forEach(element => {
            this.divisa = new Divisa();
            Object.assign(this.divisa, element);
            this.vector_divisas.push(this.divisa);
          });
        }
      );
    }*/
}
