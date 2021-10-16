import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelofferComponent } from './traveloffer/traveloffer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CartComponent,
    HeroComponent,
    HomeComponent,
    NavbarComponent,
    TravelofferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
