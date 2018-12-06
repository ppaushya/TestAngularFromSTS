import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  options = [
    {
      label: 'BestSellers',
      value: 1,
    },
    {
      label: 'Most Viewed',
      value: 2,
    },
    {
      label: 'price -low to high',
      value: 3,
    },
    {
      label: 'price - high to low',
      value: 4,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
