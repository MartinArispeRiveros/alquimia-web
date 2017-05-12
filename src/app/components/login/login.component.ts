import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [NavbarComponent]
})

export class LoginComponent implements OnInit {
	user_name: string;
	password: string;

	constructor(
		private authService: AuthService,
		private navbarComponent: NavbarComponent,
		private flashMessage: FlashMessagesService,
		private router: Router) { }
	ngOnInit(){

	}
	loginUser() {
		const user = {
			user_name: this.user_name,
			password: this.password
		}
		this.authService.authenticateUser(user).subscribe(data => {
			if(data !== undefined) {
				this.navbarComponent.updateValue();
				this.authService.storeUserData(data.token, data.user);
				this.flashMessage.show('Inicio de sesion confirmada', {cssClass: 'alert-success', timeout: 2000});
				this.router.navigate(['/']);
			}else{
				this.flashMessage.show(data.mgs, {cssClass: 'alert-danger', timeout: 2000});
				this.router.navigate(['login']);
			}
		});
	}
}