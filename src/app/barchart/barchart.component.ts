import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../app/Data';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  data: Data[];
  Player = ["Plastic", "Paper","Metal","Cardboard","others"];
  Run = [2331,4542,3421,3658,6589];
  barchart = [];
  constructor() { }

  ngOnInit(): void {
    this
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.Player,
        datasets: [
          {
            data: this.Run,
            borderColor: '#3cba9f',
            backgroundColor: [
              '#ff3c00', '#bf360c', '#ff8f00', '#ff5622','#f5e50a', '#ff5622', '#aae3f5'
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

