import { Component, Input, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Characters';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() card!:{resourceURI:string;name:string}[]
  @Input() title!:string

  constructor() { }

  ngOnInit(): void {
  }

}
