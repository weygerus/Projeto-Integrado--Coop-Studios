import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  texto_cadastro: string = 'Ainda não tem um cadastro?'

  constructor() { }

  ngOnInit(): void {
    
  }

}
