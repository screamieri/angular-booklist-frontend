import { Component, OnInit } from '@angular/core';
import { iUser } from '../model/model-interface/iuser.model';
import { AuthService } from '../service/auth-service/auth.service';
import { UserService } from '../service/user-service/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: iUser;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    /* if (this.authService.isLoggedIn()){
      this.userService.getUserById(this.userService.getUserId()).subscribe(
        data => this.user = data
      )
    } */
  }

  isLoggedIn() {    
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }
}
