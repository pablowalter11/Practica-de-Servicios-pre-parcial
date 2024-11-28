import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juegos.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  urlBase = environment.urlBase

  http = inject(HttpClient)

  getJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(this.urlBase)
  }

  getJuegoById(id: string | null): Observable<Juego>{
    return this.http.get<Juego>(`${this.urlBase}/${id}`)
  }

  postJuego(j: Juego): Observable<Juego>{
    return this.http.post<Juego>(this.urlBase, j)
  }

  putJuego(j: Juego, id: string | null): Observable<Juego>{
    return this.http.put<Juego>(`${this.urlBase}/${id}`, j)
  }

  deleteJuegoById(id: string): Observable<void>{
    return this.http.delete<void>(`${this.urlBase}/${id}`)
  }
}
