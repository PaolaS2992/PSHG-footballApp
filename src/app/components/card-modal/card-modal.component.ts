import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

@Input() teamModal:any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
