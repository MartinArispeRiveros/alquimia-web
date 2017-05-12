import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Config } from '../services/config.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
	authToken: any;
	appUrl: string;
	constructor(private http: Http) {
		this.appUrl = Config.API_SWAGGER;
	}
	
	registerClient(client) {
		let headers = new Headers();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.post(this.appUrl + '/client', client, {headers: headers})
			.map(res => res.json());
	}

	getAllClients(){
		return new Promise((resolve, reject)=>{
			let headers = new Headers();
			this.loadToken();
			headers.append('token', this.authToken);
			headers.append('content-type', 'application/json');
			this.http.get(this.appUrl + '/client', {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
				resolve(data);
			}, (err) => {
				reject(err);
			});
		});
	}

	updateClient(client){
		let headers = new Headers();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.put(this.appUrl + '/client/' + client.client_id, client, {headers: headers})
			.map(res => res.json());
	}

	getClient(client_id){
		return new Promise((resolve, reject)=>{
			let headers = new Headers();
			this.loadToken();
			headers.append('token', this.authToken);
			headers.append('content-type', 'application/json');
			this.http.get(this.appUrl + '/client/' + client_id, {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
				resolve(data);
			}, (err) => {
				reject(err);
			});
		});
	}

	loadToken(){
		const token = localStorage.getItem('token');
		this.authToken = token;
	}
}