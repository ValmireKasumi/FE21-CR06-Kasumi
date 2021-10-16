import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelofferComponent } from './traveloffer/traveloffer.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'blog', component: BlogComponent,
  },
  {
    path: 'travels', component: TravelofferComponent,
  },
  {
    path:'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
