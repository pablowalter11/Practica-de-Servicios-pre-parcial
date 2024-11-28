import { Component } from '@angular/core';
import { DetailJuegoComponent } from '../../components/detail-juego/detail-juego.component';

@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [DetailJuegoComponent],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.css'
})
export class PageDetailComponent {

}
