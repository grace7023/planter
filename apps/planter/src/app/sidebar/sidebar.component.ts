import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pltr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  NAV_LINKS = [
    { label: 'reminders', url: '' },
    { label: 'plants', url: '/plants' },
    { label: 'account', url: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
