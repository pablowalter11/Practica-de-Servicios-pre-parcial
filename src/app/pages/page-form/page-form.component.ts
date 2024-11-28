import { Component } from '@angular/core';
import { FormJuegosComponent } from '../../components/form-juegos/form-juegos.component';

@Component({
  selector: 'app-page-form',
  standalone: true,
  imports: [FormJuegosComponent],
  templateUrl: './page-form.component.html',
  styleUrl: './page-form.component.css'
})
export class PageFormComponent {

}
