import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FeedbackService } from '../services/feedback.service'; 

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent {
  public Feedback : any = [];


  constructor(private feedbackservice : FeedbackService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.feedbackservice.getAllFeedbacks().subscribe(data => {
      this.Feedback = data
    }
  );   
  }


  reloadData(){
    this.feedbackservice.getAllFeedbacks().subscribe(data => {
      this.Feedback = data
    }
  ); 
  }
  
}
