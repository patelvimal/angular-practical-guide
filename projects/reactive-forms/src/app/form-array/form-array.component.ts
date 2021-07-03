import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
    form: FormGroup;

    constructor(public fb: FormBuilder) {
        this.form = fb.group({
            productList: fb.array([])
        });
        this.addProduct();
    }

    get productList() {
        return this.form.controls['productList'] as FormArray;
    }

    ngOnInit(): void {}

    addProduct() {
        const productForm = this.fb.group({
            firstName: [''],
            lastName: ['']
        });
        this.productList.push(productForm);
    }

    removeProduct(index: number) {
        this.productList.removeAt(index);
    }
}
