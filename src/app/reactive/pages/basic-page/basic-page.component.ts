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
  private fb = inject(FormBuilder); //Inyeccion de FormBuilder (forma moderna de Forms Reactivos)
  formUtils = FormUtils;

  // Formulario reactivo
  myForm: FormGroup = this.fb.group({
    /** .group reemplaza a new FormGroup
     Es necesario definir que myForm es de tipo FormGroup para que no de error
     y se le asigna el valor de fb.group
    */

    name: ['', [Validators.required, Validators.minLength(3)]], // nombre del producto
    // por lo menos tener al menos 3 caracteres el nombre
    price: [0, [Validators.required, Validators.min(10)]], // precio del producto
    // por lo menos tener un precio minimo de 10 usd
    inStorage: [0, [Validators.required, Validators.min(0)]], // existencias del producto
    // por lo menos tener 0 existencias, false si es un numero negativo
  });

  /**  myForm2 = new FormGroup({
      name: new FormControl('', [], []), // tipo de dato any, practica no recomendable, por eso se agrega ('', []) y lo mismo en las demas
      price: new FormControl(0),
      inStorage: new FormControl(0),
    });

    isValidField(fieldName: string): boolean | null {
      return ( // Retorno de una condicion
        this.myForm.controls[fieldName].errors &&
        this.myForm.controls[fieldName].touched //
      );
    }

    getFieldError(fieldName: string): string | null { // Retorno de un string o null
      if (!this.myForm.controls[fieldName]) return null;

      const errors = this.myForm.controls[fieldName].errors ?? {};
      // Si no hay errores, asignar un objeto vacio

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

    // Cuando se envía el formulario
  onSave() { // Está llamado desde el HTML (ngSubmit)
    // Si la persona toca el form (touched)
    if (this.myForm.invalid) { // Si el formulario no es valido
      this.myForm.markAllAsTouched(); // Marcar todos los campos como tocados
      return;
    }

    console.log(this.myForm.value);

    // Establecer valores por defecto al resetear el formulario luego de enviarlo
    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
