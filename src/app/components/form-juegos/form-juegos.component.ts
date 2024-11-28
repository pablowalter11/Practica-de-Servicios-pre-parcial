import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JuegosService } from '../../services/juegos.service';
import { Juego } from '../../interfaces/juegos.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-juegos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './form-juegos.component.html',
  styleUrl: './form-juegos.component.css'
})
export class FormJuegosComponent {

  fb = inject(FormBuilder)
  jService = inject(JuegosService)

  form = this.fb.nonNullable.group(
    {
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      plataforma: ['', Validators.required]
    }
  )

  addJuego() {
    if (this.form.invalid) return

    const j = this.form.getRawValue()

    this.addJuegoBdD(j)
  }

  addJuegoBdD(j: Juego) {
    this.jService.postJuego(j).subscribe(
      {
        next: (j: Juego) => {
          console.log(`${j.nombre} cargado correctamente`)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
