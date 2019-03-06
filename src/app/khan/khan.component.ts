import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('khanName') myName: ElementRef;

  saveData(): void {
    alert(this.myName.nativeElement);
  }

  onSelectName(khan: Event): void {

    alert(khan);    

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
