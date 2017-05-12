import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector: 'app-index-client',
	templateUrl: './index-client.component.html',
	styleUrls: ['./index-client.component.scss']

})

export class IndexClientComponent implements OnInit {
	clientList: any;
	params: any = {client: 1};
	constructor(
		private clientService: ClientService,
		private fashMessage: FlashMessagesService,
		private activatedRoute: ActivatedRoute,
		private router: Router) { }
	
	ngOnInit(){
		this.clientService.getAllClients().then((clients) => {			
			this.clientList = clients;
		},
		err => {
			console.log(err);
			return false;
		});
	}

	addClientVisit(client: any){
		console.log('client');
		console.log(client);
		client.visit_count = client.visit_count + 1;
		this.clientService.updateClient(client).subscribe(data => {
			if(data) {
				this.fashMessage.show('Se ha asignado una visita al cliente!', {cssClass: 'alert-success', timeout: 2000})
			}else{
				this.fashMessage.show('No se pudo asignar la visita al cliente!', {cssClass: 'alert-danger', timeout: 2000})
			}
		})
	}
}