import { Component, OnInit } from '@angular/core';
import { DynamodbService } from 'src/app/services/dynamodb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dynamodb: DynamodbService) { }

  //ESTUDIANTE
  carnet = "";
  cui= "";
  nombreusuario = "";
  correo = "";
  fecha = "";
  listestudiantes = [
    {
      carnet: "",
      cui: "",
      nombre: "",
      correo: "",
      fechanac: ""
    }
  ];

  //CURSO
  codigo = "";
  nombrecurso = "";
  credn = "";
  credo = "";
  listcursos = [
    {
      nombre: "",
      credn: "",
      codigo: "",
      credo: ""
    }
  ];

  ngOnInit(): void {
  }

  newuser(){
    this.listestudiantes = [];
    
    this.dynamodb.newuser(this.carnet,this.cui,this.nombreusuario,this.correo,this.fecha).subscribe((res:any) => {
      for(let item of res.data){
        this.listestudiantes.push(
          {
            carnet: item.carnet.N,
            cui: item.cui.N,
            nombre: item.nombre.S,
            correo: item.correo.S,
            fechanac: item.fechanac.S
          });
      }   
    });
  }

  newcourse(){
    this.listcursos = [];
    
    this.dynamodb.newcurso(this.codigo,this.nombrecurso, this.credn, this.credo).subscribe((res:any) => {
      for(let item of res.data){
        this.listcursos.push(
          {
            nombre: item.nombre.S,
            credn: item.credn.N,
            codigo: item.codigo.N,
            credo: item.credo.N
          });
      }   
    });
  }
}
