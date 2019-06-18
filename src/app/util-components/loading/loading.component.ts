import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neg-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() hidden: boolean;
  constructor() { }

  ngOnInit() {

  }

}
