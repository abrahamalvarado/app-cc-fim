import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'app-centroscomputo',
  templateUrl: './centroscomputo.component.html',
  styleUrls: ['./centroscomputo.component.css']
})
export class CentroscomputoComponent implements OnInit {
  objcc: any;
  ccs:any;
  constructor(private catalogosService: CatalogosService) { }

  ngOnInit() {
    this.refresh();
  }

  register(cc){
    this.catalogosService.newCC(this.objcc);
    console.log(this.objcc);
    location.reload();
  }

  getCC(key){
    this.catalogosService.getCC(key).then(response =>{
      this.objcc = response[0];
      console.log(this.objcc);
    }).catch(err =>{
      console.log(err);
    })

  }

  edit(cc){
    this.catalogosService.updateCC(this.objcc);
    console.log(this.objcc);
    location.reload();
  }

  refresh(){
    this.catalogosService.getCCS().then(response =>{
      this.ccs = response;
    }).catch(err =>{
      console.log(err);
    })

    this.objcc = {
      place:'',
      key:''
    }
  }

}
