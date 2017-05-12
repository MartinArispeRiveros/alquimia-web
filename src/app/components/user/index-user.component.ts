import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
	selector: 'app-index-user',
	templateUrl: './index-user.component.html',
	styleUrls: ['./index-user.component.scss']
})

export class IndexUserComponent implements OnInit {
	newUsers: [Object];
	constructor(
		private authService: AuthService,
		private fashMessage: FlashMessagesService,
		private router: Router) { }
	
	ngOnInit(){
		this.authService.getAllUsers().subscribe(users => {
			this.newUsers = users;
		},
		err => {
			console.log(err);
			return false;
		});
	}

	disableUser(user: any){		
		this.authService.disableUser(user.user_id).subscribe(data => {
			if(data) {
				this.fashMessage.show('Se ha eliminado con exito al artista!', {cssClass: 'alert-success', timeout: 2000})
			}else{
				this.fashMessage.show('No se pudo eliminar al artista!', {cssClass: 'alert-danger', timeout: 2000})
			}
		})
	}
}