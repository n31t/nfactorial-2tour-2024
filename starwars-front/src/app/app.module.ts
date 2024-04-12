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

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'big-text', pathMatch: 'full' },
      { path: 'big-text', component: BigTextComponent, title : 'Big Text'},
      { path: 'planets', component: PlanetListComponent, title : 'Planets' },
      {path: '**', component: NotFoundComponent, title : 'Not Found'}
    ])
  ],
  declarations: [
    AppComponent,
    PlanetListComponent,
    TopBarComponent,
    BigTextComponent,
    NotFoundComponent,
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