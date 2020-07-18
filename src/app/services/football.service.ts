import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  url = 'https://api.football-data.org/v2/';

  getTeams(){
    const query = `${this.url}competitions/2018/teams`;
    return this.http.get(query).pipe(map((data) => data['teams']));
  }

  getTeamId(id: number){
    const query = `${this.url}teams/${id}`;
    return this.http.get(query);
  }
}
