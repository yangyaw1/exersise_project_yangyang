import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Test, Answer } from '../../models/test.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})

export class TestDetailComponent implements OnInit {
  test: Test;
  answer : Answer[] = [];
  correct: number = 0;
  wrong: number = 0;
  unanswered: number = 0;
  graded: boolean = false;
  start: boolean = false;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.test = this.dataService.gettest(+params['id']);
      this.dataService.gettest(+params['id'])
        .then((test) => {
              console.log(test);
              this.test = test;
              console.log(this.test);
              for(var i = 0; i < this.test.body.length; i++ ){
                  this.answer.push({value: -1});
              }
              this.unanswered = this.test.body.length;
              this.start = true;
       });
    });
    
  }
  
  grading() {
    this.correct = 0;
    this.wrong = 0;
    this.unanswered = 0;
    this.graded = true;
    for(var i = 0; i < this.test.body.length; i++ ){
      if (this.answer[i].value === this.test.body[i].solu.value) {
        this.correct ++;
      } else if (this.answer[i].value != -1) {
        this.wrong ++;
      } else {
        this.unanswered ++;
      }
    }
  }
}
