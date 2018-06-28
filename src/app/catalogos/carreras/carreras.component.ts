import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CatalogosService } from '../../services/catalogos.service';
import { Carrera } from '../../models/carrera';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  objcarrera: Carrera;
  carreras: any;
  constructor(private catalogosService:CatalogosService, private router: Router) {
    
   }

  ngOnInit() {
    this.refresh();
  }
  
  register(carrera){
    this.catalogosService.newCarrera(this.objcarrera);
    console.log(this.objcarrera);
    location.reload();
  }

  getCarrera(key){
    this.catalogosService.getCarrera(key).then(response =>{
      this.objcarrera = response[0];
      console.log(this.objcarrera);
    }).catch(err =>{
      console.log(err);
    })

  }

  edit(carrera){
    this.catalogosService.updateCarrera(this.objcarrera);
    console.log(this.objcarrera);
    location.reload();
  }

  refresh(){
    this.catalogosService.getCarreras().then(response =>{
      this.carreras = response;
    }).catch(err =>{
      console.log(err);
    })

    this.objcarrera = {
      career:'',
      key:''
    }
  }

}
