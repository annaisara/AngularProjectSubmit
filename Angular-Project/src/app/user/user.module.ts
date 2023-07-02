import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DispensingComponent } from './dispensing/dispensing.component';
import { FormsModule } from '@angular/forms';
import { DispensingBoxComponent } from './dispensing/dispensing-box/dispensing-box.component';

  const route:Routes=[

    {
    path:"home",
    component: HomeComponent,
  
    children: [
     /* {
        path:"stock",
        component: StockComponent
      },*/
      {
        path:"dispensing",
        component: DispensingComponent
      }
      
    ]
    }]

@NgModule({
  declarations: [
    HomeComponent,
    DispensingComponent,
    DispensingBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)]
  
})
export class UserModule { }
