import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: ''
})
export class KdrBasePageComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['top']);
  }
}
