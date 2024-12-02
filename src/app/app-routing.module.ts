import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants avec des chemins vérifiés
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './appartements/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './appartements/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './appartements/add-apartment/add-apartment.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'residences', component: ResidencesComponent }, // Liste des résidences
  { path: 'residences/:id', component: ResidenceDetailsComponent }, // Détails d'une résidence
  { path: 'add-residence', component: AddResidenceComponent }, // Ajout ou modification d'une résidence
  { path: 'apartments', component: ApartmentsComponent }, // Liste des appartements
  { path: 'apartments/residence/:residenceId', component: ApartmentsByResidenceComponent }, // Appartements d'une résidence
  { path: 'add-apartment', component: AddApartmentComponent }, // Ajout d'un appartement
  { path: '**', component: PageNotFoundComponent }, // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
