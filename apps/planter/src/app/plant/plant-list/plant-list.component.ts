import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pltr-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent implements OnInit {
  PLANTS = [
    { name: 'Plant 1', image: 'assets/planter_icon.png' },
    { name: 'Plant 2', image: 'assets/planter_icon.png' },
    { name: 'Plant 3', image: 'assets/planter_icon.png' },
    { name: 'Plant 4', image: 'assets/planter_icon.png' },
    { name: 'Plant 5', image: 'assets/planter_icon.png' },
    { name: 'Plant 6', image: 'assets/planter_icon.png' },
    { name: 'Plant 7', image: 'assets/planter_icon.png' },
  ];
  columnsToDisplay = ['name'];

  constructor() {}

  ngOnInit(): void {}
}
