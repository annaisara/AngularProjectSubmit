import { Component, OnInit } from '@angular/core';
import { DrugsService } from 'src/app/services/drugs.service';
import { drugdetails } from 'src/app/type';


@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  drugdetails: drugdetails[] = []
  itemCode: string = ""
  itemDescription: string = ""
  quantity: any = 0
  uoms: string[] = ["BOTTLE", "CAP", "BOX", "DROP", 'TABLET']
  uom: string = ""
  errors: string[] = []
  constructor(private rs: DrugsService) { }
  ngOnInit(): void {
    this.rs.getDrugs().subscribe(
      {
        next: (data: drugdetails[]) => this.drugdetails = data,
        error: (error: any) => this.drugdetails = []

      }

    )
  }
  getDrugs() {

    this.rs.getDrugs().subscribe(
      {
        next: (data: drugdetails[]) => this.drugdetails = data,
        error: (error: any) => this.drugdetails = []

      }

    )
  }

  clearValues(): void {
    this.quantity = ""
    this.itemCode = ""
    this.itemDescription = ""
    this.uom = ""

  }

  postDrug(): void {
    this.errors = []
    let regex =  /^[0-9]+$/
    if (this.itemCode.length < 3)
      this.errors.push("Drug code should be atleast three characteres long")
    if (this.itemDescription.length < 3)
      this.errors.push("Drug name should be atleast three characteres long")
    if (this.uom.length < 3)
      this.errors.push("UOM should be atleast three characteres long")
    if (!regex.test(this.quantity))
      this.errors.push("Quantity should be in numeric form")
    else
      if (this.quantity<=0)
      this.errors.push("Quantity should be integer and  greater than 0")


    if (this.errors.length == 0) {
      let obj = {
        itemCode: this.itemCode,
        itemDescription: this.itemDescription,
        uom: this.uom,
        quantity: this.quantity
      }

      this.rs.postDrug(obj).subscribe(

        {

          next: () => {
            alert("drug is successfully stored")
            this.clearValues()
            this.getDrugs()

          },
          error: () => alert("problem in saving drug")

        }
      )
    }
  }

}
