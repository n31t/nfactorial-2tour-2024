import { Component, OnInit } from '@angular/core';
import { Person, Starship } from '../models';
import { StarwarsService } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.css'
})
export class StarshipDetailComponent implements OnInit{
  starship !: Starship;
  pilots: Person[] = [];
  starshipId !: number;
  loaded = false;
  constructor(private starwarsService: StarwarsService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.starshipId = id;
      this.starwarsService.getStarship(id).subscribe(
        starship => {
          this.starship = starship;
          this.loaded = true;
          this.starship.pilots.forEach((pilotUrl) => {
            const pilotId = Number(pilotUrl.split('/')[5]);
            this.starwarsService.getResident(pilotId).subscribe(
              person => {
                person.id = pilotId;
                this.pilots.push(person);
              }
            )
          })
        }
      )
    })
  }
  
}
