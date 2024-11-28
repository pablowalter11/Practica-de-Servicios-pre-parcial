import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JuegosService } from '../../services/juegos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Juego } from '../../interfaces/juegos.interface';

@Component({
  selector: 'app-update-juego',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-juego.component.html',
  styleUrl: './update-juego.component.css'
})
export class UpdateJuegoComponent implements OnInit{
  ngOnInit(): void {
    this.ar.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getJuegoById(this.id)
        }
      }
    )
  }

  js = inject(JuegosService)
  ar = inject(ActivatedRoute)
  fb = inject(FormBuilder)
  r = inject(Router)

  id: string | null = null

  form = this.fb.nonNullable.group(
    {
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      plataforma: ['', Validators.required]
    }
  )

  getJuegoById(id: string | null) {
    this.js.getJuegoById(id).subscribe(
      {
        next: (j: Juego) => {
          this.form.controls['nombre'].setValue(j.nombre),
          this.form.controls['empresa'].setValue(j.empresa),
          this.form.controls['plataforma'].setValue(j.plataforma)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

  updateJuego() {
    if (this.form.invalid) return

    const j = this.form.getRawValue()

    this.js.putJuego(j, this.id).subscribe(
      {
        next: () => {
          this.r.navigateByUrl('/list')
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
