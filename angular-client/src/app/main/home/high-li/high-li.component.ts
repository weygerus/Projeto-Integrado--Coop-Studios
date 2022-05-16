import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-high-li',
  templateUrl: './high-li.component.html',
  styleUrls: ['./high-li.component.css']
})
export class highLiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.highlight__list__single').on('click', function(){
        if (!$(this).hasClass('active')) {
            var dataIndex = $(this).attr('data-index');
            $('.highlight__list__single.active').removeClass('active');
            $('.highlight__current.active').removeClass('active');
            $(this).addClass('active');
            $('.'+dataIndex).addClass('active');
        }
    });
    $('.filterItens__single').addClass('active');
    $('.filterItens__categories').on('change', function() {
        var optionValue = $('.filterItens__categories option:selected').val();
        $('.filterItens__single.active').removeClass('active');
        $('.'+optionValue).addClass('active');
    })
   }

}
