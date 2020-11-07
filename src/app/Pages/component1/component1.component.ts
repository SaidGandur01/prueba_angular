import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit, OnDestroy {

  // Acá creas las variables públicas.
  public bandera: boolean;
  public title: string;
  public text: string;
  public text2: string;
  public nose: any;

  public status: string;
  public message: string;

  constructor(
    // Creas las variables privadas.
    private router: Router
  ) {
    this.title = 'Este es el Componente 1';
    this.text = 'Esta es una prueba del componente 1';
    this.text2 = 'Esta es una segunda prueba del componente 1';
    this.status = '';
    this.message = '';
    this.bandera = true;
  }

  ngOnInit(): void {
  }

  public traigameElUsuario() {
    // this.veroService(this.title).subscribe(
    //   res => {
    //   // Acá en esta parte va todo lo que me retorna el servidor.
    //   console.log("Esto es lo que me retorna el servidor: ", res);
    // }, error => {
    //   console.log("Ups, Hubo un error : ", error);
    // });
  }

  public redirigirComponent2() {
    console.log("Entramos acá");
    this.router.navigate(['component2']).then(res => {
      console.log("Entramos acá después de que la vista cambió");
    });
  }

  ngOnDestroy(): void {
    console.log("Esto se lanza cuando se destruye el primer componente");
  }
}
