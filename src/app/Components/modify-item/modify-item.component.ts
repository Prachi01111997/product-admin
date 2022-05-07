import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MockItemsService } from '../services/mock-items.service';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {

  id:any;
  getInventoryItems:any;
  CreateInventoryItemForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });
  test:any;
  constructor(private route: ActivatedRoute,
    private service:MockItemsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
    this.validationForm();
    this.test = this.service.getItemById(this.id);
    this.CreateInventoryItemForm.controls.name.patchValue(this.test?.name);
    this.CreateInventoryItemForm.controls.description.patchValue(this.test?.description);
    this.CreateInventoryItemForm.controls.price.patchValue(this.test?.price);
    console.log(this.test);
  }

  validationForm(){
    this.CreateInventoryItemForm.valid == true;
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

  getItems(){
    this.service.getInventoryItems().subscribe(
      data=>{
        this.getInventoryItems = data;
        console.log(data)
      }
    )
  }
  onSubmit(formValue:any){
    console.log(formValue);
    formValue.id = this.id;
    console.log(formValue);
    this.service.updateInventoryItem(this.id,formValue).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['/home']);
      }
    )
  }
  CancelUpdate(){
    this.router.navigate(['/home']);
  }

  get f() {
    return this.CreateInventoryItemForm.controls;
  }

}
