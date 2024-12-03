import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})

export class AddApartmentComponent {
    addApartment: FormGroup;
    constructor(private fb:FormBuilder){
      this.addApartment=this.fb.group({
        apartNum: ['', [Validators.required, Validators.pattern('^[0-9]+$') ]],
        floorNum: ['', [Validators.required, Validators.pattern('^[0-9]+$') ]],
        surface: ['', [Validators.required, ]],
        terrace: ['', [Validators.required, ]],
        surfaceTerrace: ['', [Validators.required, ]],
        category: ['', [Validators.required, ]],
        residence: ['', [Validators.required, ]]
      })
    }
    Add(){
      
    }

    
}
