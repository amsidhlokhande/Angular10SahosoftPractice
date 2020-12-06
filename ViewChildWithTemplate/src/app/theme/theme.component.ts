import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, AfterViewInit {

  @ViewChild('name') name!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    this.name.nativeElement.style.backgroundColor = 'black';
    this.name.nativeElement.style.color = 'white';

    this.address.nativeElement.style.backgroundColor = 'cyan';
    this.address.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {

  }

}
