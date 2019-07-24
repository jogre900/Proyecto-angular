import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public nombre: string;
	public subtitulo: string;
	public correo: string;
  constructor(){
  	this.nombre = "Jose Del Corral";
  	this.subtitulo = "Desarrollador Web";
  	this.correo = "josekasike@gmail.com";
   }

  ngOnInit() {
  }

}
