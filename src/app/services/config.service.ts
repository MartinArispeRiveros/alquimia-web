import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public static API_HOST = 'http://localhost:3000';
    public static API_SWAGGER = 'http://localhost:10010';
	constructor() { }
}