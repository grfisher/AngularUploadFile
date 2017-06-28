import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: `app-jquery`,
  templateUrl: './jquery.component.html'
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  
  $(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
  });
    
  }

  

}

