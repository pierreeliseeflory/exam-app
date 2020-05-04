import { FencerService } from './../../services/fencer.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Fencer } from 'src/app/models/fencer';
import { Match } from 'src/app/models/match';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fencer-add',
  templateUrl: './fencer-add.component.html',
  styleUrls: ['./fencer-add.component.css']
})
export class FencerAddComponent implements OnInit {
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  id: number;
  name: string;
  level: "beginner" | "intermediate" | "pro";
  
  constructor(private fencerService: FencerService) { }

  ngOnInit(): void {
  }

  addFencer(form: NgForm) {
    let fencer = form.value as Fencer;
    this.fencerService.addFencer(fencer).subscribe( (fencer: Fencer) => {
      this.update.emit(true);
    })
  }

}
