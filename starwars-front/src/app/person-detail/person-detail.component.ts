import { Component, OnInit } from '@angular/core';
import { Person, Planet } from '../models';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent implements OnInit{
  person !: Person;
  planet !: Planet;
  loaded = false;
  constructor(private route: ActivatedRoute, private starwarsService: StarwarsService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.starwarsService.getResident(id).subscribe(
        person => {
          this.person = person;
          this.loaded = true;
          const personId = Number(this.person.url.split('/')[5]);
          this.person.id = personId;
          const planetId = Number(this.person.homeworld.split('/')[5]);
          this.starwarsService.getPlanet(planetId).subscribe(
            planet => {
              this.planet = planet;
              this.planet.id = planetId;
            }
          )
        }
      )
    })
  }
}
