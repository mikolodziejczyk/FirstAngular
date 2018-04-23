import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit, OnDestroy {


  constructor(private fb: FormBuilder) {
    this.createForm();

    this.firstName = <FormControl>this.myForm.controls["firstName"];
    
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  myForm : FormGroup;
  firstName : FormControl;
  private subscription : Subscription;
  

  createForm(): void {
    this.myForm = this.fb.group( {
      firstName : ["", [Validators.minLength(3)]],
      lastName: "",
      eInvoice: true
    });
  }

  
  onSubmit() {
    this.markFormGroupTouched(this.myForm)

    if (this.myForm.invalid) return;
    
    console.log("Saving form.");

    let values = this.myForm.value;
    console.log(JSON.stringify(values));

  };

  
/**
 * Marks all controls in a form group as touched
 * @param formGroup The group to process.
 */
private markFormGroupTouched(formGroup: FormGroup) {
   
  formGroup.markAsTouched(); // mark the FormGroup itself as touched

  Object.keys(formGroup.controls).map(x => formGroup.controls[x]).forEach(control => {
    control.markAsTouched();

    // process nested FormGroups, recursively -- this part is not tested
    if ((<FormGroup>control).controls) {
      let nestedFg = (<FormGroup>control);
      Object.keys(nestedFg.controls).map(x => nestedFg.controls[x]).forEach(c => this.markFormGroupTouched(nestedFg));
    }
  });
}

}
