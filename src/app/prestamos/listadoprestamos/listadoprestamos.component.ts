import { Component, OnInit } from '@angular/core';
import {PrestamoService } from '../../services/prestamo.service';

@Component({
  selector: 'app-listadoprestamos',
  templateUrl: './listadoprestamos.component.html',
  styleUrls: ['./listadoprestamos.component.css']
})
export class ListadoprestamosComponent implements OnInit {
  public prestamos: any;
  prestamo: any;
  constructor(private prestamoService: PrestamoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.prestamoService.getPrestamos().then(response =>{
      this.prestamos = response;
    }).catch(err =>{
      console.log(err);
    })
  }

  entrego(key){
    console.log(key);
    this.prestamoService.getPrestamo(key).then(response =>{
      this.prestamo =  response[0];

      this.prestamo.status='ENTREGADO';
      console.log(this.prestamo);
      this.prestamoService.updatePrestamo(this.prestamo).then(response =>{
        console.log(this.prestamo);
      }).catch(err =>{
        console.log(err);
      });
      this.refresh();
    }).catch(err =>{
      console.log(err);
    })
    
  }

} 
