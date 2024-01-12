import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CharactersComponentComponent } from './characters-component/characters-component.component';
import { LocationsComponentComponent } from './locations-component/locations-component.component';
import { FormsModule } from '@angular/forms';
import { CharactersCardComponentComponent } from './characters-card-component/characters-card-component.component';
import { CharacterModalComponentComponent } from './character-modal-component/character-modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponentComponent,
    CharactersComponentComponent,
    LocationsComponentComponent,
    CharactersCardComponentComponent,
    CharacterModalComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
