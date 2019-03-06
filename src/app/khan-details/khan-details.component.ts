import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Khan } from '../khan';

@Component({
  selector: 'app-khan-details',
  templateUrl: './khan-details.component.html',
  styleUrls: ['./khan-details.component.css']
})
export class KhanDetailsComponent implements OnInit {

  @Input() khan: Khan; 

  constructor() { }

  ngOnInit() {
  }

}
