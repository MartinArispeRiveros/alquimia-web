import { Component, OnInit, Input } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { ToolsService } from '../../services/tools.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-create-client',
	templateUrl: './form-client.component.html',
	styleUrls: ['./form-client.component.css'],
	providers: [Client],
})

export class CreateClientComponent implements OnInit {
	editState: false;
	constructor(
		private validateService: ValidateService,
		private fashMessage: FlashMessagesService,
		private clientService: ClientService,
		private router: Router,
		private client: Client,
		private toolsService: ToolsService) {
		this.client = new Client();
	}

	ngOnInit() {
	}

	clearFields(){
		this.client.name = null;
		this.client.code_card = null;
		this.client.last_name = null;
		this.client.phone = null;
		this.client.celphone = null;
		this.client.birthdate = null;
		this.client.address = null;
		this.client.email = null;
		this.client.additional_information = null;
		this.client.city = null;
	}

	resgisterOnlyClient(){
		this.clientService.registerClient(this.client).subscribe(clientSaved => {
			if(clientSaved) {
				this.fashMessage.show('Se ha creado con exito el cliente!', {cssClass: 'alert-success', timeout: 2000})
			}else{
				this.fashMessage.show('No se pudo crear cliente!', {cssClass: 'alert-danger', timeout: 4000})
			}
		});
	}

	submit() {		
		this.client.created_by = Number(localStorage.getItem('user_id'));
		this.resgisterOnlyClient();
	}
}