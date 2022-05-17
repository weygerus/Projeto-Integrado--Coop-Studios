import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {

      const main_header = document.getElementById('main-header');
      const main_nav = document.getElementById('main-nav');
      const main_li = document.getElementById('ul')

        $(window).on("scroll", function() {
          if($(window).scrollTop()! < 50) {
            main_header!.style.display = 'block';
            main_header!.style.backgroundColor = 'transparent';
            main_nav!.style.paddingTop = '25px';
            main_li!.style.color = '#ffff';
          }
          else if($(window).scrollTop()! > 50 && $(window).scrollTop()! < 550 ) {
            main_header!.style.display = 'block';
            main_header!.style.backgroundColor = '#fafafa';
            main_nav!.style.paddingTop = '10px';
            main_li!.style.color = '#101010';
          }
          else {
            main_header!.style.display = 'none'
          }

          
        })
    });
  }

}
