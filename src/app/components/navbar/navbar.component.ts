import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
	is_logged: boolean;
	user: any;
	user_id: string = localStorage.getItem('user_id');
	constructor(
		private authService: AuthService,
		private flashMessage: FlashMessagesService,
		private router: Router) {
	}

	ngOnInit(){
		this.is_logged = false;
		if(this.user_id !== undefined && this.user_id !== null) {
			this.is_logged = true;
			this.user = JSON.parse(localStorage.getItem('user'));
		}else if(this.user_id == undefined || this.user_id == null) {
			this.is_logged = false;
		}
	}

	updateValue(){
		// this.is_logged = true;
		location.reload();
	}

	onLogOutClick(){
		this.authService.logout();
		this.is_logged = false;
		this.flashMessage.show('Usted ha cerrado la sesion', {cssClass: 'alert-success', timeout: 2000});
		this.router.navigate(['/login']);
		return false;
	}
}