import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JQueryIntegrationWithAngular';
  ngOnInit(): void {
    $(document).ready(function () {
      $('button').click(function () {
        var div = $('div');
        div.animate({ left: '100px' }, 'slow');
        div.animate({ fontSize: '5em' }, 'slow'); div.animate({ left: '100px' }, 'slow');
      });
    });
  }

}
