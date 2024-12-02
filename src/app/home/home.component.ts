import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  residences = [
    { id: 1, name: 'Résidence A' },
    { id: 2, name: 'Résidence B' },
    { id: 3, name: 'Résidence C' },
  ];
}

