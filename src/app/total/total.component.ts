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

  items: Observable<any[]>;
  cboard:number=0;
  paper:number=0;
  metal:number=0;
  plastic:number=0;
  other:number=0;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('prediction').valueChanges();
    var query = db.database.ref('prediction').orderByKey();
    var card=0;
    var paper=0;
    var metal=0;
    var plastic=0;
    var other=0;
    query.on("value", (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
          if(childSnapshot.val().type=="cardboard" || childSnapshot.val().type=="Cardboard"){
            card=card+1;
          }
          else if(childSnapshot.val().type=="paper" || childSnapshot.val().type=="Paper"){
            paper=paper+1;
          }
          else if(childSnapshot.val().type=="plastic" || childSnapshot.val().type=="Plastic"){
            plastic=plastic+1;
          }
          else if(childSnapshot.val().type=="metal" || childSnapshot.val().type=="Metal"){
            metal=metal+1;
          }
          else if(childSnapshot.val().type=="other" || childSnapshot.val().type=="Other"){
            other=other+1;
          }
        });
        console.log("cardboard : "+card+" paper : "+paper+" metal : "+metal+" plastic : "+plastic);
        this.cboard=card;
        this.paper=paper;
        this.metal=metal;
        this.plastic=plastic;
        this.other=other;
        card=paper=metal=plastic=other=0;
      });
  }

  ngOnInit(): void {
  }

}
