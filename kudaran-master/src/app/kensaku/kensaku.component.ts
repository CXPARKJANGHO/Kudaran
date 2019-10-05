import { Component, OnInit } from '@angular/core';
import { KENSAKUS } from './mock-kensaku-selectbox'

@Component({
  selector: 'app-kensaku',
  templateUrl: './kensaku.component.html',
  styleUrls: ['./kensaku.component.css']
})
export class KensakuComponent implements OnInit {

  kensakus = KENSAKUS;

  constructor() { }

  ngOnInit() {
  }

}
