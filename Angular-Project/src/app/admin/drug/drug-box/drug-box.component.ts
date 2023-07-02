import { Component,Input } from '@angular/core';
import { drugdetails } from 'src/app/type';

@Component({
  selector: 'app-drug-box',
  templateUrl: './drug-box.component.html',
  styleUrls: ['./drug-box.component.css']
})
export class DrugBoxComponent {
  @Input("drugdetail") currents:drugdetails={
  
    itemCode:"",
    itemDescription:"",
    uom:"",
    quantity:0
  }
}
