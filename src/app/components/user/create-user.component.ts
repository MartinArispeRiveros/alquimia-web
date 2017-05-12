import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ToolsService } from '../../services/tools.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
	selector: 'app-create-user',
	templateUrl: './form-user.component.html',
	styleUrls: ['./form-user.component.css'],
	providers: [User]
})

export class CreateUserComponent implements OnInit {
	public roles: any[] = this.toolsService.roleOptions;	
	// roleObject: Object = {
	// 	id: "1",
	// 	text: 'Administrador',
	// 	val: 'Administrador'
	// }
	// roleObject2: Object = {
	// 	id: "2",
	// 	text: 'Cliente',
	// 	val: 'Cliente'
	// }
	// public roles: Object[] = [this.roleObject, this.roleObject2];

	constructor(
		private validateService: ValidateService, 
		private fashMessage: FlashMessagesService,
		private authService: AuthService,
		private router: Router,
		private user: User,
		private toolsService: ToolsService) {			
		this.user = new User();
	}
	
	ngOnInit() {
	}

	public roleSelected(value:any):void {
		this.user.role = value.text;
	}

	submit() {
		this.user.created_by = Number(localStorage.getItem('user_id'));
		if(!this.validateService.validateUser(this.user)) {
			this.fashMessage.show('Llene todos los campos porfavor!', {cssClass: 'alert-danger', timeout: 2000})
			return false;
		}
		this.authService.registerUser(this.user).subscribe(data => {
			if(data) {
				this.fashMessage.show('Se ha creado con exito el usuario!', {cssClass: 'alert-success', timeout: 2000})
				this.router.navigate(['/index-user']);
			}else{
				this.fashMessage.show('No se pudo crear usuario!', {cssClass: 'alert-danger', timeout: 2000})
				this.router.navigate(['/create-user']);
			}
		})
	}
}