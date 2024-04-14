import { Component, OnInit } from '@angular/core';
import { Planet } from '../models';
import { StarwarsService } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css'
})
export class PlanetDetailComponent implements OnInit{
  planet !: Planet;
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
    })
  }
  
}
