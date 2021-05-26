import { Component, Input, OnInit } from '@angular/core';
import { faBookOpen, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.css']
})
export class StatCardsComponent implements OnInit {

  @Input('icon')
  faIcon: IconDefinition;

  @Input('stat')
  statNumber: number;

  @Input('subText')
  subText: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
