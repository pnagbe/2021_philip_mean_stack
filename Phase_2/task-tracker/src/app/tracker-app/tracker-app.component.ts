import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

class Task{
  constructor(public id:string, public name:string, 
    public task:string, public deadline:string){

  }
}
@Component({
  selector: 'app-tracker-app',
  templateUrl: './tracker-app.component.html',
  styleUrls: ['./tracker-app.component.css']
})
export class TrackerAppComponent implements OnInit {

  constructor() { }

  newTask:Array<Task> = [];
  displayedColumns: string[] = ['ID', 'Name', 'Task', 'Deadline'];
  formRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    task:new FormControl("",[Validators.required]),
    deadline:new FormControl("",[Validators.required])
  })

  ngOnInit(): void {
  }

  @ViewChild(MatTable) table!: MatTable<Task>;

  addTask(){
      console.log("addTask ran");
      let formInput = this.formRef.value;

      let formData = new Task(formInput.id, formInput.name, formInput.task, formInput.deadline);
      this.newTask.push(formData);
      this.table.renderRows();
  }
}
