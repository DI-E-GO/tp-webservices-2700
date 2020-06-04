import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Covid } from 'src/app/models/covid';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  covid: Covid;
  resultados: Array<any>;
  listPaises: Array<Covid>;
  constructor(private covitService: CovidService) {
    this.listPaises = new Array<Covid>();
    this.resultados = new Array<any>();
    this.covid = new Covid();
    this.obtenerDatos();
  }

  ngOnInit(): void {
  }

  obtenerDatos() {
    this.covitService.getDatos().subscribe(
      (result) => {
        this.resultados.push(result);
        this.covid = new Covid();
        this.covid.country_name = "Todo el Mundo";
        this.covid.cases = this.resultados[0].world_total.total_cases;
        this.covid.total_cases_per_1m_population = this.resultados[0].world_total.total_cases_per_1m_population;
        this.covid.total_recovered = this.resultados[0].world_total.total_recovered;
        this.covid.deaths = this.resultados[0].world_total.total_deaths;
        this.listPaises.push(this.covid);
        for (let i = 0; i < 100; i++) {
          this.covid = new Covid();
          const element = this.resultados[0].countries_stat[i];
          Object.assign(this.covid, element);
          this.listPaises.push(this.covid);
        }
      }
      
    )
  }
}
