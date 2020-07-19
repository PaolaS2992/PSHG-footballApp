import { Component, OnInit, Input } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() teams:any[]= [];
  infoTeam: any = {};

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
  }

  getIdTeam(id: number){
    console.log(id);
    this.footballService.getTeamId(id).subscribe((data) => {
      this.infoTeam = data;
    })
  }
}
