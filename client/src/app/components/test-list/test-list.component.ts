import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Test } from '../../models/test.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy {
  tests : Test[];
  subscriptionTests: Subscription;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.gettests();
  }
  
  ngOnDestroy() {
    this.subscriptionTests.unsubscribe();
  }
  
  gettests() {
    // this.tests = this.dataService.gettests();
    this.subscriptionTests = this.dataService.gettests()
       .subscribe(tests => {
         this.tests = tests;
       });
  }

}
