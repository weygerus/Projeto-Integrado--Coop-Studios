import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {

      const search_header = document.getElementById('search-header');
      const search_nav = document.getElementById('search-nav');
      const search_li = document.getElementById('ul');

        $(window).on("scroll", function() {
          if($(window).scrollTop()! > 550) {
            search_header!.style.display = 'block';
          }
          else {
            search_header!.style.display = 'none';
          }
        })
    });
  }

}
