import { Component, inject, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { Juego } from '../../interfaces/juegos.interface';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../card-juego/card-juego.component';

@Component({
  selector: 'app-list-juegos',
  standalone: true,
  imports: [CommonModule, CardJuegoComponent],
  templateUrl: './list-juegos.component.html',
  styleUrl: './list-juegos.component.css'
})
export class ListJuegosComponent implements OnInit{
  ngOnInit(): void {
    this.listarJuegos()
  }
  
  listaJuegos!: Juego[]

  jService = inject(JuegosService)

  listarJuegos() {
    this.jService.getJuegos().subscribe(
      {
        next: (j: Juego[]) => {
          this.listaJuegos = j
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
