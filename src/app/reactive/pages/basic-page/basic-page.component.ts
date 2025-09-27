import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule, NgClass], // ReactiveFormsModule es necesario para los formularios reactivos, se toma de Angular Forms
  // Primera vez que usamos un Module: es un paquete o agrupador que tiene pipes, directivas, componentes, servicios, etc
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  // Formulario reactivo
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]], // nombre del producto
    price: [0, [Validators.required, Validators.min(10)]], // precio del producto
    inStorage: [0, [Validators.required, Validators.min(0)]], // existencias del producto
  });

  /**  myForm2 = new FormGroup({
      name: new FormControl('', [], []), // tipo de dato any, practica no recomendable, por eso se agrega ('', []) y lo mismo en las demas
      price: new FormControl(0),
      inStorage: new FormControl(0),
    });

    isValidField(fieldName: string): boolean | null {
      return (
        this.myForm.controls[fieldName].errors &&
        this.myForm.controls[fieldName].touched
      );
    }

    getFieldError(fieldName: string): string | null {
      if (!this.myForm.controls[fieldName]) return null;

      const errors = this.myForm.controls[fieldName].errors ?? {};

      for (const key of Object.keys(errors)) {
        switch (key) {
          case 'required':
            return 'Este campo es requerido';

          case 'minlength':
            return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

          case 'min':
            return `Valor mínimo de ${errors['min'].min}`;
        }
      }

      return null;
    }
  */

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
