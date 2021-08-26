import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as data from '../../assets/questions.json';

@Component({
  selector: 'app-exam-app',
  templateUrl: './exam-app.component.html',
  styleUrls: ['./exam-app.component.css']
})
export class ExamAppComponent implements OnInit {

  examRef:FormGroup;
  constructor(public form:FormBuilder){
    this.examRef=form.group({});
  }
  passmsg:string ="";
  failmsg:string ="";

  questions: any = (data as any).default;

  ngOnInit(): void {
    this.questions.forEach((q: { question: string; })=> {
      this.examRef.addControl(q.question,this.form.control(""));
    })
  }

  submit(){
    let details = this.examRef.value;
    let numRight:number = 0;

    this.questions.forEach(((q: { question: string | number; correct: any; result: string; result2: string;})=> {
      if(details[q.question] == q.correct){
        q.result = "Correct! That is the correct answer.";
        q.result2 = "";
        numRight++;
      }
      else{
        q.result2 = "Incorrect. Correct answer was "+q.correct;
        q.result = "";
      }
    }));

    if(numRight >= 7){
      this.passmsg = "Final Score: "+numRight +"/10 PASS";
      this.failmsg = "";
    }
    else{
      this.failmsg = "Final Score: "+numRight +"/10 FAIL";
      this.passmsg = "";
    }
  }


}
