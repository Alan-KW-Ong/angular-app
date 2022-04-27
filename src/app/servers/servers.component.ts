import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "Test Server Name";

  constructor() {
    // function () {}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;    
    // console.log(document.querySelector('button'))
    // console.dir(document.querySelector('button'))
  }

  // onUpdateServerName(event: any)
  onUpdateServerName(event: Event)
  {
    // console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
