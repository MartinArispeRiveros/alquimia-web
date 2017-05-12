import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Config } from '../services/config.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;
	appUrl: string;
	constructor(private http: Http) {
		this.appUrl = Config.API_SWAGGER;
	}
	
	registerUser(user) {
		let headers = new Headers();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.post(this.appUrl + '/user', user, {headers: headers})
			.map(res => res.json());
	}

	authenticateUser(user){
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return this.http.post(this.appUrl + '/login', user, {headers: headers})
			.map(res => res.json());
	}

	getAllUsers(){
		let headers = new Headers();
		this.loadToken();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.get(this.appUrl + '/user', {headers: headers})
			.map(res => res.json());
	}

	updateUser(user){
		let headers = new Headers();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.put(this.appUrl + '/user/' + user.user_id, user, {headers: headers})
			.map(res => res.json());
	}

	getUser(user_id){
		return new Promise((resolve, reject)=>{
			let headers = new Headers();
			this.loadToken();
			headers.append('token', this.authToken);
			headers.append('content-type', 'application/json');
			this.http.get(this.appUrl + '/user/' + user_id, {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
				resolve(data);
			}, (err) => {
				reject(err);
			});
		});
	}

	disableUser(user_id){
		let headers = new Headers();
		headers.append('token', this.authToken);
		headers.append('content-type', 'application/json');
		return this.http.delete(this.appUrl + '/user/' + user_id, {headers: headers})
			.map(res => res.json());
	}

	storeUserData(token, user){
		localStorage.setItem('id_token',token);
		localStorage.setItem('user',JSON.stringify(user));
		localStorage.setItem('client',JSON.stringify(user.client[0]));
		localStorage.setItem('user_id',user.user_id);
		localStorage.setItem('role',user.role);
		this.authToken = token;
		this.user = user;
	}

	logout(){
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

	loadToken(){
		const token = localStorage.getItem('token');
		this.authToken = token;
	}
}