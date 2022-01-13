import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../../service/loginauth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _loginauth : LoginauthService) { }

  ngOnInit(): void {
  }

}
