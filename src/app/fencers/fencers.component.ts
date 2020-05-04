import { FencerService } from './../services/fencer.service';
import { HttpClient } from '@angular/common/http';
import { Fencer } from './../models/fencer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fencers',
  templateUrl: './fencers.component.html',
  styleUrls: ['./fencers.component.css']
})
export class FencersComponent implements OnInit {
  fencers: Fencer[];
  myFencer: Fencer;
  id: number;
  
  constructor(private fencerService: FencerService,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      })
    }
    
    
    ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.getFencer(this.id);
    } else {
      this.getFencers();
    }
    
  }

  getFencers() {
    this.fencerService.getFencers().subscribe((fencers: Fencer[]) => {
      this.fencers = fencers;
    })
  }

  getFencer(id: number) {
    this.fencerService.getFencer(id).subscribe((fencer: Fencer) => {
      this.myFencer = fencer;
    })
  }

  updateValue() {
    this.getFencers();
  }
}
