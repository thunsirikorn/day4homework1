import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-work1',
  templateUrl: './home-work1.component.html',
  styleUrls: ['./home-work1.component.css']
})
export class HomeWork1Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      postal: ['', Validators.required],
      comment: ['']
    })
   }

  ngOnInit(): void {
  }

  submitForm() {
    alert(JSON.stringify(this.form.value))
  }

}
