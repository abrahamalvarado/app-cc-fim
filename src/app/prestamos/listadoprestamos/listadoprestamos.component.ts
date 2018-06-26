import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { EquipoService } from '../../services/equipo.service';
import * as firebase from 'firebase';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-listadoprestamos',
  templateUrl: './listadoprestamos.component.html',
  styleUrls: ['./listadoprestamos.component.css']
})
export class ListadoprestamosComponent implements OnInit {
  public prestamos: any;
  prestamo: any;
  constructor(private prestamoService: PrestamoService, private equipoService: EquipoService) { }

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
    this.prestamoService.getPrestamo(key).then(response =>{
      this.prestamo =  response[0];
      this.prestamo['intimestamp'] = firebase.database.ServerValue.TIMESTAMP
      this.prestamo.status='ENTREGADO';
      console.log(this.prestamo);
      this.equipoService.getEquipo(this.prestamo._idequipment).then(response =>{
        let equipo = response[0];
        equipo['status'] = "DISPONIBLE";
        this.equipoService.updateEquipo(equipo);
          this.prestamoService.updatePrestamo(this.prestamo).then(response =>{
            this.refresh();
        }).catch(err =>{
          console.log(err);
        });
      }).catch(err =>{
        console.log(err);
      })

    }).catch(err =>{
      console.log(err);
    })
    
  }

} 
