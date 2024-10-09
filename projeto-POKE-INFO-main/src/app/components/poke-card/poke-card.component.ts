import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: [
    './poke-card.component.css',
    './poke-card.component.responsive.css',
  ],
})
export class PokeCardComponent implements OnInit {
  @Input() photo: string = '';
  @Input() name: string = '';
  constructor() {}

  ngOnInit() {}
}
