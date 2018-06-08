import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Alumno } from '../models/alumnos'

@Injectable()
export class AlumnoService {
  private db = firebase.database();
  public alumno: Alumno;

  constructor(public afd: AngularFireDatabase) {}

  nuevoAlumno(alumno) {
    this.afd.list('/Alumnos/').push(alumno);    
  }

  snapshotToArray(snapshot){
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
  }

  getAlumnos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Alumnos/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  
}