import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';
import { Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  selectedHero: Hero;
  public heroes: Hero [] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  public showDetails(i: number){
    this.messageService.add("Just clicked on " + this.heroes[i].name)
    this.selectedHero = this.heroes[i];
  }

  getParentObj(): Hero[] {
    return this.heroes;
  }

  getHeroes(): void {
    //this.heroService.getHeroes().subscribe()
    console.log("before: " + this.heroes)
    //this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
 
    var self = this;

    this.heroService.getHeroes().subscribe(function(heroes){
      self.heroes = heroes;
      //const heroes3 = self.getParentObj();
      console.log("hero.c.ts > self.heroes: " + self.heroes); //heroes3);
      
    });

  
    // this.heroService.getHeroes()
        // .subscribe(heroes => this.heroes = heroes);
    
    

    //const myObserver = {next: value => this.heroes = value};

    // this.heroService.getHeroes().subscribe(
    //   function (value) {this.heroes = value; console.log('Next: %s', this.heroes); }, 
    //   function (err) { console.log('Error: %s', err); },
    //   function () { console.log('Completed'); });
    
    //this.heroService.getHeroes().subscribe({next (value) {this.heroes = value;console.log('Next: ' + this.heroes);}})
    console.log('Next:' + this.heroes);
    setTimeout (function() { console.log('Next: ' + this.heroes);}, 3000);
    //setTimeout(() => {  console.log("World!", this.heroes); }, 2000);
    let heroes2 = this.heroes;
    //const myObserver = {next (value, heroes2) {heroes2 = value;console.log('Next: ' + heroes2);}}

    // const myObserver = {
    //   function (x) { console.log('Next: %s', x); },
    //   function (err) { console.log('Error: %s', err); },
    //   function () { console.log('Completed'); });
    // }
    

    //this.heroService.getHeroes().subscribe(myObserver);
    console.log("after: " + this.heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  } 
}


























