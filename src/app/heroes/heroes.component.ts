import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  // hero: Hero = {
  //   name: "Windstorm",
  //   id: 1
  // }

  //indexNum: number

  selectedHero: Hero;
  heroes: Hero [];

  constructor(private heroService: HeroService) { }

  showDetails(i: number){
    this.selectedHero = this.heroes[i];
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  } 
}


























