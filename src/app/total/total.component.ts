import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  items:Observable<any[]>;
  paper:number;
  plastic:number;
  card:number;
  metal:number;
  other:number;


  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('prediction').valueChanges();
  }

  ngOnInit(): void {
  }

}
