import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/models/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.css']
})
export class CharacterInformationComponent implements OnInit {

  hero!:Characters

  constructor(private characterService:CharactersService,private route: ActivatedRoute) { }

  searchImages(query: string): string {
    let imageLink = "../../../assets/marvel.jpg";
    this.characterService.searchImages(query).subscribe(
      data => {
        imageLink = data;
      }
    );
    return imageLink
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.characterService.getCharacterById(id).subscribe((hero:Characters) => {
        this.hero = hero
      });
    }
  }

}
