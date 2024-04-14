import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BigTextComponent } from './big-text/big-text.component';
import { SearchComponent } from './search/search.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'main-page', pathMatch: 'full' },
      { path: 'main-page', component: BigTextComponent, title : 'StarWars Archive'},
      { path: 'planets', component: PlanetListComponent, title : 'Planets' },
      {path: 'search', component: SearchComponent, title : 'Search'},
      {path: 'planets/:id', component: PlanetDetailComponent, title : 'Planet Detail'},
      {path: 'people/:id', component: PersonDetailComponent, title : 'Person Detail'},
      // {path: 'search/planets', component: PlanetListComponent, title : 'Search Planets'},
      {path: '**', component: NotFoundComponent, title : 'Not Found'}
    ])
  ],
  declarations: [
    AppComponent,
    PlanetListComponent,
    TopBarComponent,
    BigTextComponent,
    NotFoundComponent,
    SearchComponent,
    PlanetDetailComponent,
    PersonDetailComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/