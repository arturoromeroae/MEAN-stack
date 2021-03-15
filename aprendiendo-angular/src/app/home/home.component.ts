import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificate: boolean;

  constructor() {
    this.identificate = false;
  }

  ngOnInit(): void {
  }

  setIdentificate(){
    this.identificate = true;
  }

  unsetIdentificate(){
    this.identificate = false;
  }

}
