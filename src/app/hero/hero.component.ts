import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroSubTitle:string;
  heroHeading: string;
  heroText: string;
  heroBtnText: string;
  heroBtnUrl: string;
  constructor() {
    this.heroSubTitle = 'Experience The';
    this.heroHeading = 'Best Trip Ever';
    this.heroText =
      'We are committed to offering travel services of the highest quality, combining our energy and enthuisiasm with years of experience.';
    this.heroBtnText = 'Contact Us';
    this.heroBtnUrl = '#home';
  }

  ngOnInit(): void {}
}
