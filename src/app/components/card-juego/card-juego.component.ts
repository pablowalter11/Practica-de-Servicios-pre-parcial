import { Component, inject, Input } from '@angular/core';
import { Juego } from '../../interfaces/juegos.interface';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-card-juego',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-juego.component.html',
  styleUrl: './card-juego.component.css'
})
export class CardJuegoComponent{

  @Input()
  j!: Juego

  js = inject(JuegosService)
  route = inject(Router)

  deleteJuego(id: any) {
    this.js.deleteJuegoById(id).subscribe(
      {
        next: () => {
          console.log('Eliminado')
          this.route.navigateByUrl('').then( () => {
            this.route.navigateByUrl('/list')
          })
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
