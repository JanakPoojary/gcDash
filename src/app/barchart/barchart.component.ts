import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../app/Data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  items: Observable<any[]>;
  cboard: number = 0;
  paper: number = 0;
  metal: number = 0;
  plastic: number = 0;
  other: number = 0;


  data: Data[];
  Player = ["Plastic", "Paper", "Metal", "Cardboard", "others"];
  //Run = [2, 2, 1, 23, 0];
  barchart = [];
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('prediction').valueChanges();
    var query = db.database.ref('prediction').orderByKey();
    var card = 0;
    var paper = 0;
    var metal = 0;
    var plastic = 0;
    var other = 0;
    query.on("value",(snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val().type == "cardboard" || childSnapshot.val().type == "Cardboard") {
            card = card + 1;
          }
          else if (childSnapshot.val().type == "paper" || childSnapshot.val().type == "Paper") {
            paper = paper + 1;
          }
          else if (childSnapshot.val().type == "plastic" || childSnapshot.val().type == "Plastic") {
            plastic = plastic + 1;
          }
          else if (childSnapshot.val().type == "metal" || childSnapshot.val().type == "Metal") {
            metal = metal + 1;
          }
          else if (childSnapshot.val().type == "other" || childSnapshot.val().type == "Other") {
            other = other + 1;
          }
        });
        console.log("cardboard : " + card + " paper : " + paper + " metal : " + metal + " plastic : " + plastic);
        this.cboard = card;
        this.paper = paper;
        this.metal = metal;
        this.plastic = plastic;
        this.other = other;
        this.makegraph();
        card=paper=metal=plastic=other=0;
        
      });
  }


  ngOnInit(): void {

  }
  makegraph(): void {
    this
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.Player,
        datasets: [
          {
            data: [this.plastic, this.paper, this.metal, this.cboard,this.other],
            borderColor: '#3cba9f',
            backgroundColor: [
              '#ff3c00', '#bf360c', '#ff8f00', '#ff5622', '#f5e50a', '#ff5622', '#aae3f5'
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
