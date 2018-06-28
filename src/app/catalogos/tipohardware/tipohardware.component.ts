import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'app-tipohardware',
  templateUrl: './tipohardware.component.html',
  styleUrls: ['./tipohardware.component.css']
})
export class TipohardwareComponent implements OnInit {
  objtipo: any;
  tipos: any;
  constructor(private catalogosService: CatalogosService) { }

  ngOnInit() {
    this.refresh();
  }

  register(tipo){
    this.catalogosService.newtTipoHw(this.objtipo);
    console.log(this.objtipo);
    location.reload();
  }

  getTipo(key){
    this.catalogosService.getTipoHw(key).then(response =>{
      this.objtipo = response[0];
      console.log(this.objtipo);
    }).catch(err =>{
      console.log(err);
    })

  }

  edit(tipo){
    this.catalogosService.updateTipoHw(this.objtipo);
    console.log(this.objtipo);
    location.reload();
  }

  refresh(){
    this.catalogosService.getTiposHw().then(response =>{
      this.tipos = response;
    }).catch(err =>{
      console.log(err);
    })

    this.objtipo = {
      type:'',
      key:''
    }
  }

}
