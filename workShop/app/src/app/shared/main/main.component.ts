import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
 get isLoggedIn() {
  return this.authService.isLoggedIn;
 }
  constructor(private authService: AuthService) { }

 

}
