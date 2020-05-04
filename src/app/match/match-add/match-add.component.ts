import { MatchService } from './../../services/match.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Fencer } from 'src/app/models/fencer';
import { Match } from 'src/app/models/match';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {
  @Input() fencers: Fencer[];
  fencer1_id: number;
  fencer2_id: number;
  winner: 1 | 2;

  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
  }

  addMatch(form: NgForm) {
    let match = form.value as Match;
    this.matchService.addMatch(match).subscribe( (match: Match) => {
      this.update.emit(true);
    })
  }
}
