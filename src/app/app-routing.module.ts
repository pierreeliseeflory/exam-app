import { FencersComponent } from './fencers/fencers.component';
import { MatchesComponent } from './matches/matches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


const routes: Routes = [
  {path: '', component: LeaderboardComponent},
  {path: 'fencers', component: FencersComponent},
  {path: 'matches', component: MatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
