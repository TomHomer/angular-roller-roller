import { Component, OnInit, Input } from '@angular/core';
import { Die } from '../die';

@Component({
  selector: 'app-die-detail',
  templateUrl: './die-detail.component.html',
  styleUrls: ['./die-detail.component.css']
})
export class DieDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() die: Die;

  

}

