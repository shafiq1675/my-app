import { Component, OnInit } from '@angular/core';
import { Khan } from '../khan';
import { KHANS } from '../mock-khans';
import { Event } from '@angular/router';

@Component({
  selector: 'app-khan',
  templateUrl: './khan.component.html',
  styleUrls: ['./khan.component.css']
})
export class KhanComponent implements OnInit {

  selectedKhan: Khan;

  onSelect(khan: Khan): void {

    alert(khan.name);
    this.selectedKhan = khan;

  }

  onSelectName(khan: Event): void {

    //alert(khan.target.value);    

  }

  //khan: Khan = {
  //  id: 1,
  //  name: 'Windstorm'
  //};

  khans = KHANS;



  constructor() { }

  ngOnInit() {

    alert('Hello it works');

  }
}
