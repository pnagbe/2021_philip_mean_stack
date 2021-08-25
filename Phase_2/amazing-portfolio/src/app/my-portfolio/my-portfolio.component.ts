import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

class Contact{
  constructor(public cname:string, public pnum:string){
      this.cname = cname;
      this.pnum = pnum;
  }
}

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})

export class MyPortfolioComponent implements OnInit {

  constructor() { }

  login:boolean = true;
  signup:boolean = false;
  portfolio:boolean = false;

  user:string = "";
  pass:string = "";
  fname:string = "";
  lname:string = "";
  msg:string = "";
  msg2:string = "";
  
  contacts:Array<Contact> = [];

  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  signupRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  portfolioRef = new FormGroup({
    cname:new FormControl("",[Validators.required]),
    pnum:new FormControl("",[Validators.required])
  })

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    if(login.user == this.user && login.user == this.pass){
      this.msg = "Succesful Login";
      this.swap(3);
    }
    else{
      this.msg = "Failed Login";
    }
    this.loginRef.reset();
    this.msg2 = "";
  }

  addUser(){
    let userinfo = this.signupRef.value;

    this.fname = userinfo.fname;
    this.lname = userinfo.lname;
    this.user = userinfo.user;
    this.pass = userinfo.pass;
    if(this.user.length > 0 && this.pass.length > 0){
      this.msg = "";
      this.msg2 = "User added succesfully";
      this.signupRef.reset();
    }
  }

  addDetails(){
    let details = this.portfolioRef.value;

    let contactInfo = new Contact(details.cname,details.pnum);
    this.contacts.push(contactInfo);
  }

  swap(digit:number){
    switch (digit){
      case 1:
        this.login = true;
        this.signup = false;
        this.portfolio = false;
        break;
      case 2:
        this.login = false;
        this.signup = true;
        this.portfolio = false;
        break;
      case 3:
        this.login = false;
        this.signup = false;
        this.portfolio = true;
        break;
      default:
        break;
    }
  }
}
