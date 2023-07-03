import { Component, Input } from '@angular/core';
import { dispensingdetails } from 'src/app/type';

@Component({
  selector: 'app-dispense-list-box',
  templateUrl: './dispense-list-box.component.html',
  styleUrls: ['./dispense-list-box.component.css']
})
export class DispenseListBoxComponent {
  @Input("dispensingdetail") currents:dispensingdetails={
    prn:"",
    patientname:"",
    itemCode:"",
    uom:"",
    quantity:0
  }
 @Input("gapindex") currentgapindex:number=-1
}
