import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // Despliegue de sidebar
  public irScroll$ = new BehaviorSubject<string>('');
  public resolucionPantallaApp$ = new BehaviorSubject<number>(0);

  constructor() {
  }

// COM Scroll **********
  public setIrScroll(irScroll: string) {
    this.irScroll$.next(irScroll);
  }

  public getIrScroll(): Observable<string> {
    return this.irScroll$.asObservable();
  }

    // COM Resize.
    public set resolucionPantallaData(resolucionPantallaApp: number) {
      this.resolucionPantallaApp$.next(resolucionPantallaApp);
    }

    public get resolucionPantalla(): Observable<number> {
      return this.resolucionPantallaApp$.asObservable();
    }

}
