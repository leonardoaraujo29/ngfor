@Component({


selector: 'my-app',


template: `


<h1>{{title}}</h1>


<h2>My Heroes</h2>


<ul class="heroes">


<li *ngFor="let hero of heroes"


[class.selected]="hero === selectedHero"


(click)="onSelect(hero)">


<span class="badge">{{hero.id}}</span> {{hero.name}}


</li>


</ul>


<hero-detail [hero]="selectedHero"></hero-detail>


`,


styles: [`


.selected {