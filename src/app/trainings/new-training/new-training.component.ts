import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTrainings(){
    this.router.navigate(['trainings']);
  }
}
