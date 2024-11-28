import { Component } from '@angular/core';
import { ListJuegosComponent } from '../../components/list-juegos/list-juegos.component';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [ListJuegosComponent],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {

}
