import { Component, OnInit } from '@angular/core';
import { Person } from '../models';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent implements OnInit{
  person !: Person;

  constructor(private route: ActivatedRoute, private starwarsService: StarwarsService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.starwarsService.getResident(id).subscribe(
        person => {
          this.person = person;
        }
      )
    })
  }
}
