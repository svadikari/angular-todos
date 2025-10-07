import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public userService: UserService, private router: Router){}
  signOut() {
    this.userService.logout();
    this.router.navigate([
      'login'
    ])
  }
}
