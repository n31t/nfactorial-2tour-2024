import { Component, OnInit } from '@angular/core';
import { Person, Planet } from '../models';
import { StarwarsService } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css'
})
export class PlanetDetailComponent implements OnInit{
  planet !: Planet;
  residents !: Person[];
  planetId !: number;
  loaded = false;
  constructor(private starwarsService: StarwarsService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.planetId = id;
      this.starwarsService.getPlanet(id).subscribe(
        planet => {
          this.planet = planet;
          this.loaded = true;
        }
      )
      this.planet.residents.forEach((residentUrl) => {
        const parts = residentUrl.split('/');
        const residentId = Number(parts[parts.length - 2]);;
        this.starwarsService.getResident(residentId).subscribe(
          person => {
            this.residents.push(person);
          }
        )
      })
    })
  }
  
}
