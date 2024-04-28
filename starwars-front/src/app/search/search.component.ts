import { Component } from '@angular/core';
import { Person, Planet, Starship } from '../models';
import { StarwarsService } from '../starwars.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  planets : Planet[] = [];
  residents : Person[] = [];
  starships : Starship[] = [];
  searchQuery: string;
  loaded = false;
  constructor( private starwarsService: StarwarsService) {
    this.searchQuery = '';
  }
  search() {
    this.loaded = false;
    this.starwarsService.searchPlanets(this.searchQuery).subscribe(
      (planets) => {
        this.planets = planets;
        this.planets.forEach(planet => {
          const id = Number(planet.url.split('/')[5]);
          planet.id = id;
        });
        this.loaded = true;
        console.log(this.planets);
      }
    );
    this.starwarsService.searchResidents(this.searchQuery).subscribe(
      (residents) => {
        this.residents = residents;
        this.residents.forEach(resident => {
          const id = Number(resident.url.split('/')[5]);
          resident.id = id;
        });
        this.loaded = true;
      }
    );
    this.starwarsService.searchStarships(this.searchQuery).subscribe(
      (starships) => {
        this.starships = starships;
        this.starships.forEach(starship => {
          const id = Number(starship.url.split('/')[5]);
          starship.id = id;
        });
        this.loaded = true;
      }
    );
  }
}
