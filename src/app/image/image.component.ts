import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  date = new Date();
  items:Observable<any[]>;
  type:string="Paper";


  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('prediction', ref => ref.limitToLast(1)).valueChanges();
    this.items.subscribe(lastItems =>{
      console.log(lastItems);  
    });
  }

  ngOnInit(): void {
  }

}
