import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }
  
  searchImages(query: string): Observable<any> {
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${environment.cx}&searchType=image&key=${environment.googleApi}&num=1`;
    return this.httpClient.get<any>(url).pipe(
      map(result => {
        return result.items[0].link
      })
    );
  }

  public getCharacterById(id: string): Observable<Characters> {
    return this.httpClient.get<{ result: Characters[] }>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${id}/${environment.api}`).pipe(
      map(response => {
        const result = response.result[0];
        const character: Characters = {
          id: result.id,
          name: result.name,
          description: result.description,
          thumbnail: result.thumbnail,
          comics: result.comics,
          series: result.series,
          stories: result.stories,
          events: result.events
        };
        return character;
      })
    );
  }

  public getCharacters(): Observable<Characters[]> {
    return this.httpClient.get<{ result: Characters[] }>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${environment.api}`).pipe(
      map(response => 
          response.result
        )
    );
  }

}
