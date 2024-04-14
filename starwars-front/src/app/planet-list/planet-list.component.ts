import { Component, OnInit } from '@angular/core';
import { Planet } from '../models';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})
export class PlanetListComponent implements OnInit{
  // number_of_planets = Array(60);
  planets !: Planet[];
  loaded = false;
  constructor(private starwarsService: StarwarsService){
  }

  ngOnInit() {
    this.starwarsService.getPlanets().subscribe(
      planets => {
        this.planets = planets;
        this.planets.forEach((planet, index)=> {
          planet.id = index + 1;
          planet.image = `assets/images/planets/${planet.id}.png`;
        })
        this.loaded = true;
      },
      error => {
        console.error('Error fetching planets', error);
      }
    );
  }
  
}
