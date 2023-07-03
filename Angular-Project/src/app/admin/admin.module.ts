import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrugComponent } from './drug/drug.component';
import { FormsModule } from '@angular/forms';
import { DrugBoxComponent } from './drug/drug-box/drug-box.component';
import { DispensingListingComponent } from './home/dispensing-listing/dispensing-listing.component';
import { DispenseListBoxComponent } from './home/dispensing-listing/dispense-list-box/dispense-list-box.component';
import { SharedModule } from '../shared/shared.module';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,

  children: [
    {
      path:"drug",
      component: DrugComponent
    }
  ,
  {

    path:"dispensing-listing",
    component: DispensingListingComponent
  }
  
  ]
  }]

@NgModule({
  declarations: [
    DrugComponent,
    DrugBoxComponent,
    DispensingListingComponent,
    DispenseListBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(route)]
})
export class AdminModule { }
