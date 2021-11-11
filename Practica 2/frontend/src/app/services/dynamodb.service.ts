import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DynamodbService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  prefijo_url = 'http://localhost:3000/';

  //CREAR USUARIO
  newuser(carnet:string, cui:string, nombre:string, correo:string, fechanac:string){
    const url = this.prefijo_url + 'newstudent';
    return this.http.post(url, {
      "carnet": carnet,
      "cui": cui,
      "nombre": nombre,
      "correo": correo,
      "fechanac": fechanac
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //CREAR CURSO
  newcurso(codigo:string, nombre:string, credn:string, credo:string){
    const url = this.prefijo_url + 'newcourse';
    return this.http.post(url, {
      "codigo": codigo,
      "nombre": nombre,
      "credn": credn,
      "credo": credo
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //ASIGNACION POR ESTUDIANTE
  asignacioncurso(estudiante:string, curso:string, periodo:string){
    const url = this.prefijo_url + 'asigcurso';
    return this.http.post(url, {
      "estudiante": estudiante,
      "curso": curso,
      "periodo": periodo
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //CREAR ACTIVIDAD
  newactivity(tipo:string, fechai:string, fechaf:string){
    const url = this.prefijo_url + 'newactivity';
    return this.http.post(url, {
      "tipo": tipo,
      "fechai": fechai,
      "fechaf": fechaf
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //CREAR NOTA
  newnota(nota:string, estudiante:string, actividad:string){
    const url = this.prefijo_url + 'newnota';
    return this.http.post(url, {
      "nota": nota,
      "estudiante": estudiante,
      "actividad": actividad
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //OBTENER ASIGNACIONES
  getasignaciones(curso:string){
    const url = this.prefijo_url + 'getstudentcourse';
    return this.http.post(url, {
      "curso": curso
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //OBTENER NOTAS DE ACTIVIDADES
  getnotas(actividad:string){
    const url = this.prefijo_url + 'getnota';
    return this.http.post(url, {
      "actividad": actividad
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }
}
