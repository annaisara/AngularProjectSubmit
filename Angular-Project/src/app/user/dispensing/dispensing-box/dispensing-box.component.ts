import { Component,Input } from '@angular/core';
import { dispensingdetails } from 'src/app/type';

@Component({
  selector: 'app-dispensing-box',
  templateUrl: './dispensing-box.component.html',
  styleUrls: ['./dispensing-box.component.css']
})
export class DispensingBoxComponent {
  @Input("dispensingdetail") currents:dispensingdetails={
    prn:"",
    patientname:"",
    itemCode:"",
    uom:"",
    quantity:0
  }

}
   

