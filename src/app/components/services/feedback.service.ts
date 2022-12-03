import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  
  
  saveFeedback(feedback: Object): Observable<Object> {
    return this.http.post(`http://localhost:7075/RefurbishedMart/feedbackcontroller/saveFeedback`,feedback);
  }

  getAllFeedbacks(): Observable<any> {
    return this.http.get(`http://localhost:7075/RefurbishedMart/feedbackcontroller/getFeedbacks`);
  }
}
