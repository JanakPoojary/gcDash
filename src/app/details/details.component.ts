import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  items:Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('prediction').valueChanges();
  }

  ngOnInit(): void {
  }


}
