import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SeatviewComponent } from './seatview/seatview.component';
import { SittingComponent } from './sitting/sitting.component';
import { HttpClientModule } from '@angular/common/http';


 @NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    SeatviewComponent,
    SittingComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
