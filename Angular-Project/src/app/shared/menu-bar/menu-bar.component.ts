import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  username:any=""
  usertype:any=""
  busertype:boolean =false;
  constructor(private log:LoginService,private router:Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.usertype=sessionStorage.getItem("usertype");
    this.username=sessionStorage.getItem("email");
    if(this.usertype=="admin"){
     this.busertype = true
     }
    else
    {this.busertype = false
      
    }
       
  }
  
  navigate(url:string){
   
    if(url=="")
    window.location.reload()
    else
    {
     this.router.navigate([url], {relativeTo:this.route});

      
    }
  
  }

  logout(){
    this.log.logout();
    window.location.reload();
}

}
