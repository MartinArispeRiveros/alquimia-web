import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ClientService } from '../../services/client.service';
import { ToolsService } from '../../services/tools.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../models/client';

@Component({
	selector: 'app-edit-client',
	templateUrl: './form-client.component.html',
	styleUrls: ['./form-client.component.css'],
	providers: [Client]
})

export class EditClientComponent implements OnInit {
	private id;
	private sub: any;
	editState: true;
	clientForEdit: any;

	constructor(
		private validateService: ValidateService,
		private fashMessage: FlashMessagesService,
		private authService: AuthService,
		private clientService: ClientService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private client: Client,
		private toolsService: ToolsService) { }
	
	async ngOnInit() {
		this.sub = this.activatedRoute.params.subscribe(params => {
    		this.id = +params['id'];
    	});
		await this.clientService.getClient(this.id).then((client) => {
			this.clientForEdit = client;
			this.client = this.clientForEdit;
		});
	}

	submit() {
		
		if(!this.validateService.validateclient(this.client)) {
			this.fashMessage.show('Llene todos los campos de nombre, apellido y correo porfavor!', {cssClass: 'alert-danger', timeout: 4000})
			return false;
		}
		
		this.clientService.updateClient(this.client).subscribe(data => {
			if(data) {
				this.fashMessage.show('Se ha actualizado con exito los datos del cliente!', {cssClass: 'alert-success', timeout: 2000})
				this.router.navigate(['/index-client']);						
			}else{
				this.fashMessage.show('No se pudo actualizar los datos del cliente!', {cssClass: 'alert-danger', timeout: 4000})
			}
		});
	}
}