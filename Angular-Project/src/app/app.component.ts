import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';

 /* constructor(private router:Router){

    this.router.navigate(['login'])

  }*/
  

  constructor(private log:LoginService,private router:Router){
          
  }

  ngAfterViewInit(){
    if(!this.log.getStatus()){
      console.log("status true")
                
      this.router.navigate(['login'])
   }
   else{

    console.log("status true")
     if(this.log.usertype=="admin")
       this.router.navigate(['admin/home']);
     else
       this.router.navigate(['user/home']);
   }
  }
}




