import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './main/home/home.component';
import { highLiComponent } from './main/home/high-li/high-li.component';
import { BannerComponent } from './main/home/banner/banner.component';
import { CarouselComponent } from './main/home/carousel/carousel.component';
import { SearchNavComponent } from './shared/search-nav/search-nav.component';
import { SobreComponent } from './main/sobre/sobre.component';
import { LoginComponent } from './core/auth/login/login.component';
import { FaqComponent } from './main/faq/faq.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardsComponent } from './main/home/cards/cards.component';
import { CadastroComponent } from './core/auth/cadastro/cadastro.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    HomeComponent,
    highLiComponent,
    BannerComponent,
    CarouselComponent,
    SearchNavComponent,
    SobreComponent,
    LoginComponent,
    FaqComponent,
    CardsComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
