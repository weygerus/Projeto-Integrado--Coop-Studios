import { CadastroComponent } from './core/auth/cadastro/cadastro.component';
import { FaqComponent } from './main/faq/faq.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SobreComponent } from './main/sobre/sobre.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  // main routes
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },

  // auth routes
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
