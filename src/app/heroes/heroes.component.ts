import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  // ngOnInit - Aqui va la logica inicial
  ngOnInit(): void {
    this.getHeroes();
  }

  // Metodo sincronico
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // Metodo asincronico con Observable
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
