import { Component, OnInit } from '@angular/core';
import {  trigger, state , style,transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public estadoBanner: string = 'criado';

  constructor() { }

  ngOnInit() {
  }

}
