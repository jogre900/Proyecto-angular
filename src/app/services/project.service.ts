import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/proyect';
import { Global } from './global';

@Injectable ()	
	export class ProjectService{
		public url: string;

		constructor(
			private _httpClient: HttpClient
			){
			this.url = Global.url;
		}
	
		//metodo de prueba
		testService(){
			return "probando servicio de Angular";
		}
	}
