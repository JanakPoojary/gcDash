import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }
  time = new Date();
  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }

}
