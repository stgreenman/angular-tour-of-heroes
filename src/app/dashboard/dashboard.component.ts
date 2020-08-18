import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  topHeroes: Hero [] = [];

  defineTopHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.topHeroes = heroes;
      this.topHeroes.slice(3, 3);
      console.log("dashboard.c.ts > topHeroes: " + this.topHeroes);
    });
  }
  

  ngOnInit(): void {
    this.defineTopHeroes();
  }


}
