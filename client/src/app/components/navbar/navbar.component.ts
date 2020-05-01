import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { from } from 'rxjs';
import {Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  onLogoutClick(){
    this.authService.logOut();
    
    this.router.navigate(['/']);

  }

  ngOnInit(): void {
  }

}
