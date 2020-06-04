import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';


const routes: Routes = [
  {path: 'punto-a', component:PuntoAComponent},
  {path: 'punto-b', component:PuntoBComponent},
  {path: 'punto-c', component:PuntoCComponent},
  {path: 'punto-d', component:PuntoDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
