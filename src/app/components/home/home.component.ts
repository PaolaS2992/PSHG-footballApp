import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTeams: any[]=[];

  constructor(private footballService: FootballService) {
    this.footballService.getTeams().subscribe((data) => {
        console.log(data);
        this.allTeams = data;
      });
  }

  ngOnInit(): void {
  }

}
