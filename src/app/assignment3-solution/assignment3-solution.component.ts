import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3-solution',
  templateUrl: './assignment3-solution.component.html',
  styleUrls: ['./assignment3-solution.component.css']
})
export class Assignment3SolutionComponent implements OnInit {

  logs = [];
  showSecret = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay()
  {
    this.showSecret = !this.showSecret;
    //this.logs.push(this.logs.length + 1);
    this.logs.push(''+ new Date());
  }

}
