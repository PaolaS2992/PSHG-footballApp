import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectTeams:any[] = [];
  objTeam: any = {};
  selectValue: Boolean;

  constructor(private footballService: FootballService) {
    this.footballService.getTeams().subscribe((data) => {
      data.map((a:any) => {
        this.selectTeams.push({
          id: a.id,
          name: a.name
        })
      });
      console.log(this.selectTeams);
    })
   }

  searchTeam(termino: string){
    if(termino === '' || termino === undefined || termino === null){
      this.selectValue = false;
    } else {
      this.selectValue = true;
      const idTeam = parseInt(termino, 10);
      this.footballService.getTeamId(idTeam).subscribe((data:any) => {
        console.log('soy data:', data);
        this.objTeam = data;
      })
    }
  }
  
  ngOnInit(): void {
  }

}
