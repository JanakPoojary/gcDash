import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  e1:Array<any>;
  errorMessage:string;
  num:number=7;

  constructor() { }

  ngOnInit(): void {
  }
  give(n: number) {
    return this.e1.slice(n-7,n);
  }
  next(){
    if(this.num<=this.e1.length){
    this.num=this.num+7;
    }
  }
  prev(){
    if(this.num>7){
    this.num=this.num-7;
    }
  }

}
