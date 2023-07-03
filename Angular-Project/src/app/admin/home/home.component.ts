import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (public router : Router,public route:ActivatedRoute,private log:LoginService) {};
/*
  drugClick()
  {

    this.router.navigate(['drug'],{relativeTo:this.route});
  }

  dispList()
  {
    this.router.navigate(['dispensing-listing'],{relativeTo:this.route});

  }


  logout(){
    this.log.logout();
    window.location.reload();
}
*/
}
