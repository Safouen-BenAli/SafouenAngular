/*import { Component } from '@angular/core';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  nextResidence() {
    const nextId = this.id + 1; // Exemple basique
    this.router.navigate(['/residences', nextId]);
  }
  
}


import { ActivatedRoute } from '@angular/router';

export class ResidenceDetailsComponent {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  nextResidence() {
    const nextId = this.id + 1; // Exemple basique
    this.router.navigate(['/residences', nextId]);
  }
  
}
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Vérifiez que vous avez bien importé Router

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute, private router: Router) {} // Injectez correctement Router

  ngOnInit(): void {
    // Récupération de l'ID depuis les paramètres de l'URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  nextResidence(): void {
    // Navigation vers la résidence suivante
    const nextId = this.id + 1; // Exemple basique pour incrémenter l'ID
    this.router.navigate(['/residences', nextId]); // Navigation avec le router
  }
}

