import { Component, OnInit } from '@angular/core';


export interface ILogin {
  login: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  texto_cadastro: string = 'Ainda não tem uma conta?'

  auth: ILogin = {
    login:'', 
    senha:''
  }

  constructor() { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if(this.auth.login == '1234' && this.auth.senha == '1234'){
      
    }
    
  }

}
