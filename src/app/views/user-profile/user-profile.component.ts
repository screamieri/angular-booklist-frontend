import { Component, OnInit } from '@angular/core';
import { faBookOpen, faFile, faLayerGroup, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  faBookOpen = faBookOpen;
  faFile = faFile;
  faLayerGroup = faLayerGroup;
  faReview = faStarHalfAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
