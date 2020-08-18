import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'
import { Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("getHeroes called");

    // const HEROES_test: Hero[] = [
    //   { id: 11, name: 'Dr Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
    console.log("hero.service.ts > HEROES: " + HEROES)
    return of(HEROES);
    //return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`Fetched Hero with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(public messageService: MessageService) { }
}
