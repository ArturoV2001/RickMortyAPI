import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponentComponent } from './characters-component/characters-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { LocationsComponentComponent } from './locations-component/locations-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponentComponent },
  { path: 'search', component: SearchComponentComponent },
  { path: 'locations', component: LocationsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
