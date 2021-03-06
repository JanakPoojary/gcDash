import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  items:Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('prediction').valueChanges();
  }

  ngOnInit(): void {
  }

}
