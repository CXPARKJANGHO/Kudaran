import {Component, Input, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: 'kdr-top-page.component.html'
})
export class KdrTopPageComponent implements OnInit, OnDestroy {
  test = 'i am iron man';

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  //
  // clickClickList() {
  //   this.router.navigate(['/clinic-list']);
  // }
  //
  // regClinicClick() {
  //   this.router.navigate(['/reg']);
  // }
  //
  // // clickClinicConfirmation() {
  // //   this.router.navigate(['/a/clinic-cnfr']);
  // // }
  // //
  // // clickClinicPending() {
  // //   this.router.navigate(['/a/clinic-pending']);
  // // }
  // //
  // clickContentsList() {
  //   this.router.navigate(['/contents-list']);
  // }
  //
  // clickRecContentsList() {
  //   this.router.navigate(['/rec-contents-list']);
  // }
  //
  // clickMailSet() {
  //   this.router.navigate(['/ms']);
  // }

}
