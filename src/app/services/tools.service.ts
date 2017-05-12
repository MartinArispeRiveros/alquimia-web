import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class ToolsService {
	public roleOptions: String[] = ['Adminstrador', 'Vendedor', 'Tour Manager'];
	public categoryOptions: String[] = ['Folklore', 'Rock', 'Pop', 'Cumbia'];	
	public stateEventOptions: String[] = ['Todos', 'cotizacion', 'negociacion', 'contrato', 'liquidado', 'finalizado'];
	public currencyOptions: String[] = ['Bs.', '$us'];
	public clientTypeOptions: String[] = ['Cliente', 'Prospecto'];
	public artistCart: any[] = [];
	public isSeller(){
		return localStorage.getItem('role') == 'Vendedor' ? true : false;
	}
	public formatDate(date){
		let newDate = moment(date).format('YYYY-MM-DD hh:mm:ss');
		return newDate;
	}
}