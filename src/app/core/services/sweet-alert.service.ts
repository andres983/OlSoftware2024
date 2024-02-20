import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  public sweetAlertExito(mensajeConfirmacion?: string){
    Swal.fire({
      title: mensajeConfirmacion,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  public sweetAlertInformativo(message: string): void {
    Swal.fire({
      title: `<p class="label_alert">Ol Dice</p>`,
      html:
        '<img src="../../../assets/imagenes/logo_OL.png" class="img-responsive imagen_alert"></img> ' +
        '<br>' +
        `${message}`,
      confirmButtonColor: ' #2A354D',
      confirmButtonText: `Aceptar`,
      allowEscapeKey: false,
      allowEnterKey: false,
      allowOutsideClick: false,
    });
  }

  public sweetAlertAccionAceptar(
    message: string,
  ): Promise<any> {
    return new Promise(resolve => {
      Swal.fire({
        title: `<p class="label_alert">Ol Dice</p>`,
        html:
        '<img src="../../../assets/imagenes/logo_OL.png" class="img-responsive imagen_alert"></img> ' +
          '<br>' +
          `<p style="padding:0 1rem; text-align : center;">${message}</p>`,
        confirmButtonText: `Aceptar`,
        confirmButtonColor: ' #2A354D',
        allowEscapeKey: false,
        allowEnterKey: false,
        allowOutsideClick: false,
        reverseButtons: true,
      }).then(result => {
        if (result.isConfirmed) {
          resolve(true);
        }
      });
    });
  }

  public sweetAlertAccionBoton(message: string): Promise<any> {
    return new Promise(resolve => {
      Swal.fire({
        title: `<p class="label_alert">Ol Dice</p>`,
        html:
        '<img src="../../../assets/imagenes/logo_OL.png" class="img-responsive imagen_alert"></img> ' +
          '<br>' +
          `${message}`,
        showCancelButton: true,
        confirmButtonText: `Aceptar`,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: ' #2A354D',
        allowEscapeKey: false,
        allowEnterKey: false,
        allowOutsideClick: false,
        reverseButtons: true,
      }).then(result => {
        if (result.isConfirmed) {
          resolve(true);
        }
      });
    });
  }
}
