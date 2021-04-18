import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Location, registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {Commune, communes} from '../../../assets/data';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  subs = [
    {
      budget: 200000,
      exs: ['La création d\'un square', 'La rénovation des locaux d\'un cinéma indépendant', 'La végétalisation d\'une place']
    },
    {budget: 2000000, exs: ['La réhabilitation d\'une piscine', 'La réhabilitation d\'un petit musée', 'La construction d\'une école']},
    {budget: 2500000, exs: ['La rénovation d\'une école', 'La construction d\'un centre social']},
    {
      budget: 3000000,
      exs: ['La construction et aménagement de deux crèches', 'La rénovation de 3 EHPAD', 'La réhabilitation de trois complexes sportifs']
    },
    {budget: 3500000, exs: ['La rénovation de 7 MJC', 'L\'ouverture de 3 gares sur une ligne TER existante']},
    {budget: 4000000, exs: ['La création d\'une forêt urbaine', 'La rénovation de 4 gymnases', 'La réhabilitation de deux piscines']},
    {budget: 4500000, exs: ['Le financement de 4,5 km de ligne TER', 'La rénovation de deux écoles']},
  ];
  puy = 4745502;
  puyNbHab = 20135;
  puyEtiq = 'Divers droite';
  description: string;
  result = false;
  difference: number;
  exemple: string;
  filteredOptions: Observable<Commune[]>;
  myControl = new FormControl();
  count = [0, 0, 0, 0, 0, 0, 0];
  myCommune: Commune;
  // top5: Commune[];
  // top5t1: Commune[];
  // top5t2: Commune[];

  constructor(private location: Location, private activatedRoute: ActivatedRoute) {
    // this.top5 = this.getTop5();
    // this.top5t1 = this.getTop5VoteT1();
    // this.top5t2 = this.getTop5VoteT2();
  }

  private static getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit(): void {
    registerLocaleData(fr);
    this.activatedRoute.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.myControl.setValue(slug);
      console.log(slug);
      this.comparer();
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        map(value => this._filter(value))
      );
  }

  comparer(): void {
    if (this.myControl.valid) {
      const foundedCommune = communes.find(c => c.name.toLowerCase() === this.myControl.value.toLowerCase());
      if (foundedCommune) {
        this.myCommune = foundedCommune;
        this.difference = this.puy - foundedCommune.budget;
        this.location.replaceState('' + this.myCommune.name);
        this.getExemple();
      } else {
        // TODO error not found
      }
    }
  }

  getExemple(): void {
    for (let i = this.subs.length - 1; i > 0; i--) {
      if (this.difference >= this.subs[i].budget) {
        this.count[i]++;
        this.exemple = this.subs[i].exs[CompareComponent.getRandomInt(this.subs[i].exs.length)];
        this.description = '#PuySansFond Ma Commune a bénéficié de '
          + this.myCommune.budget
          + '€ de la part de la région, contre '
          + this.puy
          + '€ pour le #PuyEnVelay. Ce qui aurait pu financer: '
          + this.exemple
          + '. Et chez vous ? Faites le test !';
        break;
      }
    }
  }

  getTradCouleurPol(etiq): string {
    switch (etiq) {
      case 'NC' :
        return 'Non communiqué';
      case 'LDIV' :
        return 'Mixte';
      case 'LDVD' :
        return 'Divers droite';
      case 'LDVG' :
        return 'Divers gauche';
      case 'LFG' :
        return 'Front de Gauche';
      case 'LMDM' :
        return 'Modem (centre)';
      case 'LPG' :
        return 'PG (gauche)';
      case 'PG' :
        return 'PG (gauche)';
      case 'LSOC':
        return 'Socialiste';
      case 'LUC':
        return 'Centre';
      case 'LUD' :
        return 'Droite';
      case 'LUDI':
        return 'UDI (droite)';
      case 'LUG':
        return 'Union gauche';
      case 'LUMP':
        return 'UMP (droite)';
      case 'LVEC':
        return 'EELV (Gauche)';
      case 'LCOM':
        return 'Communiste (gauche)';
    }
  }

  private _filter(value: string): Commune[] {
    const filterValue = value.toLowerCase();
    return communes.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

// private getTop5(): Commune[] {
//   const test = this.communes.sort((a, b) => {
//     return b.budget - a.budget;
//   });
//   return test.slice(0, 5);
// }
//
// private getTop5VoteT1(): Commune[] {
//   const test = this.communes.sort((a, b) => {
//     return b.t1 - a.t1;
//   });
//   return test.slice(0, 27);
// }
//
// private getTop5VoteT2(): Commune[] {
//   const test = this.communes.sort((a, b) => {
//     return b.t2 - a.t2;
//   });
//   return test.slice(0, 27);

