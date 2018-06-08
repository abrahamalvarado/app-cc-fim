import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Hardware } from '../models/hardware'

@Injectable()
export class HardwareService {
  private db = firebase.database();
  public equipo: Hardware;

  constructor(public afd: AngularFireDatabase) {}

  nuevoAlumno(equipo) {
    this.afd.list('/Equipos/').push(equipo);    
  }

}