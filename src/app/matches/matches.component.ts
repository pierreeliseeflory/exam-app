import { FormsModule } from '@angular/forms';
import { MatchService } from './../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match';
import { FencerService } from '../services/fencer.service';
import { Fencer } from '../models/fencer';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Match[];
  fencers: Fencer[];

  constructor(private matchService: MatchService,
    private fencerService: FencerService) { }

  ngOnInit(): void {
    this.getMatches();
    this.getFencers();
  }
  getMatches() {
    this.matchService.getMatches().subscribe((matches: Match[]) => {
      this.matches = matches;
    })
  }

  getFencers() {
    this.fencerService.getFencers().subscribe((fencers: Fencer[]) => {
      this.fencers = fencers;
    })
  }

  updateValue() {
    this.getMatches();
    this.getFencers();
  }
}
