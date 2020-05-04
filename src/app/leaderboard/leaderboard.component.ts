import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { FencerService } from '../services/fencer.service';
import { Match } from '../models/match';
import { Fencer } from '../models/fencer';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  matches: Match[];
  fencers: Fencer[];
  points: number[];
  leaderBoard: string[];

  constructor(private matchService: MatchService,
    private fencerService: FencerService) { }

    ngOnInit(): void {
      this.getMatches();
      this.getFencers();
      this.getRanking();
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

    computePoints() {
      this.points = [];
      let index: number;
      let indexMatch: number;
      let fencer: Fencer;
      let point: number;
      let id: number;
      for (index = 0; index < this.fencers.length; index++) {
        point = 0;
        fencer = this.fencers[index];
        id = fencer.id;
        for (indexMatch = 0; indexMatch < this.matches.length; indexMatch++) {
          if ((this.matches[indexMatch].fencer1_id == id && this.matches[indexMatch].winner == 1) || (this.matches[indexMatch].fencer2_id == id && this.matches[indexMatch].winner == 2)) {
            point++;
          }
        }
        this.points.push(point);
      }
    }

    getRanking() {
      this.leaderBoard = [];
      this.computePoints();
      let i: any;
      let max;
      while(this.points.length > 0) {
        max = Math.max(...this.points);
        i = this.points.indexOf(max);
        this.leaderBoard.push(this.fencers[i].name);
        this.points.splice(i,1);
        console.log(this.points);
        this.fencers.splice(i,1);
      }
      console.log(this.leaderBoard);
      
    }
}
