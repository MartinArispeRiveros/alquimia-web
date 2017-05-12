import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
	
	constructor() { }
	
	validateUser(user) {
		if(user.user_name == undefined || user.password == undefined || user.full_name == undefined) {
			return false;
		}else{
			return true;
		}
	}
	
	validateclient(client) {
		if(client.name == undefined || client.last_name == undefined || client.email == undefined) {
			return false;
		}else{
			return true;
		}
	}

	validateArtist(artist){
		if(artist.name == undefined || artist.category == undefined) {
			return false;
		}else{
			return true;
		}
	}

	validateEvent(event, image){
		if(event.name == undefined || event.start_time == undefined  || event.end_time == undefined || event.location == undefined || image == undefined) {
			return false;
		}else{
			return true;
		}
	}

	validateMember(member){
		if(member.name == undefined || member.last_name == undefined  || member.identification_number == undefined ) {
			return false;
		}else{
			return true;
		}
	}

	validateBankAccount(account){
		if(account.name == undefined || account.number == undefined  || account.owner_identification_number == undefined || account.owner_identification_name == undefined || account.bank == undefined) {
			return false;
		}else{
			return true;
		}
	}
}