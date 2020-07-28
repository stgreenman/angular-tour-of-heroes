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
    return of(HEROES);
  }

  constructor(public messageService: MessageService) { }
}
