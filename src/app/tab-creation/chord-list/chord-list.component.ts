import { Component, OnInit } from '@angular/core';
import { Chord } from '../chord.model';

@Component({
  selector: 'app-chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.css']
})
export class ChordListComponent implements OnInit {

  recipes: Chord[] = [
    new Chord('1', '2', '3', '4'),
    new Chord('1', '2', '3', '4'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
