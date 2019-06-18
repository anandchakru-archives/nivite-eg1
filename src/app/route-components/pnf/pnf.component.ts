import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'neg-pnf',
  templateUrl: './pnf.component.html',
  styleUrls: ['./pnf.component.scss']
})
export class PnfComponent implements OnInit, OnDestroy {
  uns = new Subject();
  redirectTimer = 60;
  redirectUrl = '//jrvite.com';
  counter = this.redirectTimer;
  constructor() { }

  ngOnInit() {
    interval(1000).pipe(takeUntil(this.uns)).subscribe((i: number) => {
      if (i >= (this.redirectTimer - 1)) {
        window.location.href = this.redirectUrl;
      }
      this.counter--;
    });
  }
  ngOnDestroy() {
    this.uns.next();
    this.uns.complete();
  }
}
