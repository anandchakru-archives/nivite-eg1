import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'neg-carouseli',
  templateUrl: './carouseli.component.html',
  styleUrls: ['./carouseli.component.scss']
})
export class CarouseliComponent implements OnInit {
  @Input() photos: Array<any>;
  @Input() slideInterval: number = 5000;
  @Output() loaded = new EventEmitter<any>();
  carouselCurrentSlide = 0;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    interval(this.slideInterval).subscribe((count) => {
      if (this.photos) {
        this.carouselNext();
      }
    });
  }

  carouselPrevious(event) {
    event.preventDefault();
    this.carouselCurrentSlide = this.carouselCurrentSlide <= 0 ? this.photos.length - 1 : this.carouselCurrentSlide - 1;
    this.cdr.detectChanges();
    return false;
  }
  carouselNext(event?: any) {
    if (event) {
      event.preventDefault();
    }
    this.carouselCurrentSlide = this.carouselCurrentSlide >= (this.photos.length - 1) ? 0 : this.carouselCurrentSlide + 1;
    this.cdr.detectChanges();
    return false;
  }
  carouselGoto(event, photoIndx) {
    event.preventDefault();
    this.carouselCurrentSlide = photoIndx;
    this.cdr.detectChanges();
    return false;
  }
  imgLoaded(event, photoIndx) {
    if (photoIndx === 0) {
      this.loaded.emit(event);
    }
  }
}
