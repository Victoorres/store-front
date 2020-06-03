import { Component, OnInit } from '@angular/core';
import { Camisa } from 'src/app/classes/camisa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  camisas: Camisa[];

  constructor() { }

  ngOnInit() {
  }

}
