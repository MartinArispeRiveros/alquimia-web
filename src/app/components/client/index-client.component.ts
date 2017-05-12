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

	disableClient(client: any){
		// this.eventService.updateEvent(eventEdited).subscribe(data => {
		// 	if(data) {
		// 		this.fashMessage.show('Se ha eliminado con exito el evento!', {cssClass: 'alert-success', timeout: 2000})
		// 	}else{
		// 		this.fashMessage.show('No se pudo eliminar el evento!', {cssClass: 'alert-danger', timeout: 2000})
		// 	}
		// })
	}
}