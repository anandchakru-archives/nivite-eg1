import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'neg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  uns = new Subject();
  loaded: boolean;
  invite: any;
  carousalReady: boolean;
  //
  redirectTimer = 60;
  redirectUrl = '//jrvite.com';
  counter = this.redirectTimer;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.uns)).subscribe(params => {
      const iOid = params.get('iOid'); // Required - 18054132c5d13
      const ciOid = params.get('ciOid'); // Optional - 180544d732b47 (customerInviteOid)
      this.http.get('http://localhost:8080/repo/invite/search/byOid?oid='
        + iOid + '&ciOid=' + ciOid + '&projection=preview').subscribe(invite => {
          this.invite = invite;
          this.setLoaded();
        }, (error => {
          this.setLoaded();
        }));
    });
  }

  ngOnDestroy() {
    this.uns.next();
    this.uns.complete();
  }
  private setLoaded() {
    setTimeout(() => {
      this.loaded = true;
      this.setRedirectIfError();
    }, 1500);
  }
  private setRedirectIfError() {
    if (!this.invite) {
      interval(1000).pipe(takeUntil(this.uns)).subscribe((i: number) => {
        if (i >= (this.redirectTimer - 1)) {
          window.location.href = this.redirectUrl;
        }
        this.counter--;
      });
    }
  }
  onCarouseliReady(event) {
    this.carousalReady = true;
  }
  navigate() {
    window.open(this.invite.addrUrl, '_blank');
  }
}
