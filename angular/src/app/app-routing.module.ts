import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatviewComponent } from './seatview/seatview.component'
import { SittingComponent } from './sitting/sitting.component'

const routes: Routes = [
  { path: 'mainpage2/seatview', component: SeatviewComponent },
  { path: 'mainpage2/sitting', component: SittingComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
