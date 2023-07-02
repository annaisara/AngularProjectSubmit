export interface drugdetails{
    itemCode:string;
    itemDescription:string;
    uom:string;
    quantity:number;
  }

  export interface dispensingdetails{
    prn:string;
    patientname:string;
    itemCode:string;
    uom:string;
    quantity:number;
  }