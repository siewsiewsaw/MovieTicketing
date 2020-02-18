import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatviewComponent } from './seatview/seatview.component'
import { SittingComponent } from './sitting/sitting.component'
import  {ProfitchartComponent } from './profitchart/profitchart.component'

const routes: Routes = [
  { path: 'mainpage2/seatview', component: SeatviewComponent },
  { path: 'mainpage2/sitting', component: SittingComponent },
  { path: 'mainpage2/profitchart', component: ProfitchartComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
