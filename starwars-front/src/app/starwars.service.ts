import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, Planet, Starship } from './models';
import { Observable, forkJoin, range} from 'rxjs';
import { map, switchMap} from 'rxjs/operators';

interface ApiResponse {
    count: number | undefined;
    results: Planet[];
}

@Injectable({
  providedIn: 'root'
})

export class StarwarsService {
    BASE_URL = 'https://swapi.dev/api';

    constructor(private http: HttpClient) { }

    getPlanets(): Observable<Planet[]> {
        let count = this.http.get<ApiResponse>(`${this.BASE_URL}/planets/`).pipe(
            map(response=> response.count)
        );
        return count.pipe(
            switchMap(countValue => {
                const requests = [];
                for(let i = 1; i <= countValue!; i += 1) {
                    requests.push(this.http.get<Planet>(`${this.BASE_URL}/planets/${i}/`));
                }
                return forkJoin(requests);
            })
        );
    }

    getPlanet(id: number): Observable<Planet> {
        return this.http.get<Planet>(`${this.BASE_URL}/planets/${id}/`)
    }
    getResident(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.BASE_URL}/people/${id}/`)
    }
    getStarship(id: number): Observable<Starship> {
        return this.http.get<Starship>(`${this.BASE_URL}/starships/${id}/`)
    }
}