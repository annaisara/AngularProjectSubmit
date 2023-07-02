import { Component,OnInit  } from '@angular/core';
import { DispensingService } from 'src/app/services/dispensing.service';
import { dispensingdetails ,drugdetails} from 'src/app/type';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-dispensing-listing',
  templateUrl: './dispensing-listing.component.html',
  styleUrls: ['./dispensing-listing.component.css']
})
export class DispensingListingComponent {
  dispensingdetails:dispensingdetails[]=[]
  drugdetails:drugdetails[]=[]
  prn:string=""
  patientname:string=""
  itemCode:string =""
  quantity:any =0
  uoms : string[] = [] 
  uom:string=""
  errors: string[] = []
  constructor(private rs: DispensingService,private ds: DrugsService) {  }
    ngOnInit(): void {
  

    this.rs.getDispensing().subscribe(
      {
        next :(data:dispensingdetails[])=>this.dispensingdetails=data,
        error:(error:any)=>this.dispensingdetails=[]
        
        }

    )

  }
   
  getDispensing(){
   
    this.rs.getDispensing().subscribe(
      {
        next :(data:dispensingdetails[])=>this.dispensingdetails=data,
        error:(error:any)=>this.dispensingdetails=[]
        
        }

    )
  } 
}
