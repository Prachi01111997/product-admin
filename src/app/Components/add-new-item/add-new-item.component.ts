import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockItemsService } from '../services/mock-items.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {
  CreateInventoryItemForm: FormGroup = new FormGroup({});
  getInventoryItems:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private itemService:MockItemsService) { }

  ngOnInit(): void {
    this.validationForm();
    this.getItems();
  }

  getItems(){
    this.itemService.getInventoryItems().subscribe(
      data=>{
        this.getInventoryItems = data;
        console.log(data)
      }
    )
  }

  validationForm(){
    this.CreateInventoryItemForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+')
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
          // Validators.pattern('[0-9]{12}')
        ]
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(8),
          Validators.pattern('^([0-9]+(\.?[0-9]?[0-9]?)?)')
        ]
      ]
    });
  }

  onSubmit(formValue:any){
    formValue.id = this.getInventoryItems.length + 1;
    console.log(formValue);
    this.itemService.addInventoryItem(formValue).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['/home']);
      }
    )
  }

  CancelUpdate() {
    this.router.navigate(['/home']);
  }

  get f() {
    return this.CreateInventoryItemForm.controls;
  }

}
