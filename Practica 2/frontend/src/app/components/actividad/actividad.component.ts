import { Component, OnInit } from '@angular/core';
import { DynamodbService } from 'src/app/services/dynamodb.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  constructor(public dynamodb: DynamodbService) { }

  ngOnInit(): void {
  }

  Tipo ="";
  fechai = "";
  fechaf = "";
  listaactividades = [{
    fechaf: "",
    fechai: "",
    tipo: ""
  }];

  actividad = "";
  nota = "";
  carnet = "";

  listanotas = [{
    nota: "",
    estudiante: "",
    actividad: ""
  }];

  actividadV = "";

  listanotasV = [{
    nota: "",
    estudiante: "",
    actividad: ""
  }];

  newactividad(){
    this.listaactividades = [];
    
    this.dynamodb.newactivity(this.Tipo, this.fechai, this.fechaf).subscribe((res:any) => {
      for(let item of res.data){
        this.listaactividades.push(
          {
            fechaf: item.fechaf.S,
            fechai: item.fechai.S,
            tipo: item.tipo.S
          });
      }   
    });
  }

  newnota(){
    this.listanotas = [];
    
    this.dynamodb.newnota(this.nota, this.carnet, this.actividad).subscribe((res:any) => {
      for(let item of res.data){
        this.listanotas.push(
          {
            nota: item.nota.N,
            estudiante: item.estudiante.N,
            actividad: item.actividad.S
          });
      }   
    });
  }

  vernota(){
    this.listanotasV = [];
    this.dynamodb.getnotas(this.actividadV).subscribe((res:any) => {
      for(let item of res.data[0].Items){
        this.listanotasV.push(
          {
            nota: item.nota.N,
            estudiante: item.estudiante.N,
            actividad: item.actividad.S
          });
      }   
    });
  }
}
