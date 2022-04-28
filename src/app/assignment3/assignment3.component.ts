import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  isDisplay = true;
  logArray = [''];
  counter = 1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay()
  {
    this.isDisplay = this.isDisplay ? false : true;
    this.logArray.push('' + new Date() + ' ' +this.counter);
    // this.counter = this.counter + 1;
    this.counter++;
  }

  getColor()
  {
    return this.counter >= 5 ? 'blue' : 'black';
  }

}
