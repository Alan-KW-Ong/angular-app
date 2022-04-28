import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css']
})
export class Ass1Component implements OnInit {

  userName: String = "UserName";

  constructor() { }

  ngOnInit(): void {
  }

  onReset()
  {
    this.userName  = "";
  }  

}
