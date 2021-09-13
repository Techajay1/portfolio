import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }
  myForm = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(/^[a-zA-Z]+$/i)
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(/^[a-zA-Z]+$/i)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i)
    ])
  })


  ngOnInit(): void {
    
  }
  reset(){
    this.myForm.reset();
  }
  get firstname(): FormControl {
    return this.myForm.get('fname') as FormControl
  }
  get lastname(): FormControl {
    return this.myForm.get('lname') as FormControl
  }
  get emaiId(): FormControl {
    return this.myForm.get('email') as FormControl
  }
}
