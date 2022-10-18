import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-appointment-rating',
  templateUrl: './appointment-rating.component.html',
  styleUrls: ['./appointment-rating.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppointmentRatingComponent implements OnInit {
  @Input('rating') public rating: number;
  private starCount: number = 5;
  @Output() public ratingUpdated = new EventEmitter();

  public ratingArr = [];

  constructor() {
  }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  returnStar(i:number){
    if(this.rating >= i+1){
      return 'star'
    }else{
      return 'star_border'
    }
  }

  onClick(i:number) {
    this.rating = i + 1;
    this.ratingUpdated.emit(i);
    return false;
  }
}
