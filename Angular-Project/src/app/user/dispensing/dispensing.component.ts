import { Component,OnInit } from '@angular/core';
import { DispensingService } from 'src/app/services/dispensing.service';
import { dispensingdetails ,drugdetails} from 'src/app/type';
import { DrugsService } from 'src/app/services/drugs.service';


@Component({
  selector: 'app-dispensing',
  templateUrl: './dispensing.component.html',
  styleUrls: ['./dispensing.component.css']
})
export class DispensingComponent implements OnInit {
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
  //constructor(private rs: DispensingService) {  }
   ngOnInit(): void {
    this.ds.getDrugs().subscribe(
      {
        next :(data:drugdetails[])=>{this.drugdetails=data 
        },         
        error:(error:any)=>this.drugdetails=[]        
        }

    )
    this.getDrugsUom()

    this.rs.getDispensing().subscribe(
      {
        next :(data:dispensingdetails[])=>this.dispensingdetails=data,
        error:(error:any)=>this.dispensingdetails=[]
        
        }

    )

  }

  getDrugs(){

    this.ds.getDrugs().subscribe(
      {
        next :(data:drugdetails[])=>{this.drugdetails=data
     
        }, 
        
        error:(error:any)=>this.drugdetails=[]
        
        }

    )
  }

  getDrugsUom(){
    this.ds.getDrugs().subscribe(
      {
        next :(data:drugdetails[])=>{
          //this.drugdetails=data;
          this.uoms=Array.from (new Set( data.map(drug=>drug.uom) )  )      
        },         
        error:(error:any)=>this.drugdetails=[]        
        }

    )
  }
  /*drug: drugdetails[] = [
    { itemCode: "2343", itemDescription: "PARACETAMOL TABLET 500",uoms:"x",quantity:100 },
    { itemCode: "520-00212", itemDescription: "LEGUCILIN 250MG TABLET" ,uoms:"x",quantity:100},
    { itemCode: "ASPIT30", itemDescription: "ASPIRIN30 DESC",uoms:"x",quantity:100 }
  
  ]*/
  getDispensing(){
   
    this.rs.getDispensing().subscribe(
      {
        next :(data:dispensingdetails[])=>this.dispensingdetails=data,
        error:(error:any)=>this.dispensingdetails=[]
        
        }

    )
  } 
   clearValues():void {
    this.prn=""
    this.patientname=""
    this.quantity=""
    this.itemCode=""
    this.uom=""
   
  }
postDispensing(): void {

  this.errors = []
  let regex =  /^[0-9]+$/
  if (this.itemCode.length < 3)
    this.errors.push("Drug code should be atleast three characteres long")
  if (this.prn.length < 3)
    this.errors.push("Patient PRN  should be atleast three characteres long")
  if (this.patientname.length < 3)
    this.errors.push("Patient name  should be atleast three characteres long") 
    if (this.uom.length < 3)
    this.errors.push("UOM should be atleast three characteres long")
  if (!regex.test(this.quantity)) 
    this.errors.push("Quantity should be in numeric form")
    else
    if (this.quantity<=0)
     this.errors.push("Quantity should be integer and greater than 0")

  if (this.errors.length == 0) {
    let obj = {
    prn:this.prn,
    patientname:this.patientname,  
    itemCode: this.itemCode,
    uom :this.uom,
    quantity :this.quantity
  }
   
  this.rs.postDispensing(obj).subscribe(
   
    {
      
      next: () => {
        alert("Dispensing is successfully stored")
        //location.reload()
        this.clearValues()
        this.getDispensing()  

      },
      error: () => alert("problem in saving dispensing")

    }
  )
  }
}
}
