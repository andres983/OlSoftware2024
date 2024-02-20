import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SubjectService } from '../../../core/services/subject.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('animacionuno', { static: false }) public mydiv!: ElementRef;

  public installEvent = null;
  public resize$?: Observable<number>;
  public resize?: number;
  public contador = 0;
  public isTokenEmpty: boolean = true;

  constructor(private readonly router: Router,
    private rendere: Renderer2,
    private readonly subjectService: SubjectService) { }

  ngOnInit(): void {
    this.validateToken();
  }

  public scrollIntoView(elem: string) {
    this.rendere.removeClass(this.mydiv.nativeElement, 'main-menu--show');
    this.contador = 1;
    this.subjectService.setIrScroll(elem);
  }

  public abrirMenu(): void {

    if (this.contador === 0) {
      this.rendere.addClass(this.mydiv.nativeElement, 'main-menu--show');
      this.contador = 1;
    } else {
      this.rendere.removeClass(this.mydiv.nativeElement, 'main-menu--show');
      this.contador = 0;
    }
  }

  validateToken(): void {
    const token = localStorage.getItem('token');

    if (token !== null) {
      this.isTokenEmpty = false;
    }

  }

  public cerrarMenu(): void {
    this.rendere.addClass(this.mydiv.nativeElement, 'main-menu--show');
    this.contador = 1;
  }

}
