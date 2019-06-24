import { Component, OnInit } from '@angular/core';
import { Test, Question, Chioce, Answer } from '../../models/test.model';
import { DataService } from '../../services/data.service';
import { cloneDeep } from 'lodash';

const DEFAULT_TEST: Test = Object.freeze({
  'id':0,
  'name': '',
  'body': [],
  'subject': 'Math'
})

const DEFAULT_QUESTION: Question = Object.freeze({
  'id':0,
  'des': '',
  'chioces': [],
  'solu': {'value':-1}
})

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})


export class AddTestComponent implements OnInit {
  newtest: Test = cloneDeep(DEFAULT_TEST);
  subjects: string[] = ['Math', 'Physics', 'Coding'];
  numberofquestion: number = 0;
  newquestion: Question;
   
  numberofchioce: number[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }
  
  questions_init() {
    this.newtest.body = [];
    this.numberofchioce = [];
    for(let i = 0; i < this.numberofquestion; i++){
       this.newquestion = cloneDeep(DEFAULT_QUESTION);
       this.newquestion.id = i+1;
       this.newtest.body.push(this.newquestion);
       this.numberofchioce.push(0);
    }
  }
  
  chioce_init(j) {
    this.newtest.body[j].chioces = [];
    for(let i = 0; i < this.numberofchioce[j]; i++){
      this.newtest.body[j].chioces.push({value: ''});
    }
  }
  
  addtest() {
    this.dataService.addtest(this.newtest);
  }
  
  solu_get(j, q){
    this.newtest.body[j].solu.value = q+1;
    console.log(j.toString());
  }
}
