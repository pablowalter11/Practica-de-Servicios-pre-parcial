import { Component, inject, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { Juego } from '../../interfaces/juegos.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-juego.component.html',
  styleUrl: './detail-juego.component.css'
})
export class DetailJuegoComponent implements OnInit{
  js = inject(JuegosService)
  ar = inject(ActivatedRoute)

  j: Juego = {
    nombre: '',
    empresa: '',
    plataforma: ''
  }
  id!: string | null

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

  getJuegoById(id: string | null) {
    this.js.getJuegoById(id).subscribe(
      {
        next:(j: Juego) => {
          this.j = j
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
