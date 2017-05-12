import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { ToolsService } from '../../services/tools.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
	selector: 'app-edit-user',
	templateUrl: './form-user.component.html',
	styleUrls: ['./form-user.component.css'],
	providers: [User]
})

export class EditUserComponent implements OnInit {
	private id;
	private sub: any;
	public roles: any[] = this.toolsService.roleOptions;
	userForEdit: any;
	constructor(
		private validateService: ValidateService,
		private fashMessage: FlashMessagesService,
		private authService: AuthService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private user: User,
		private toolsService: ToolsService) {}

	ngOnInit(){
		this.sub = this.activatedRoute.params.subscribe(params => {
    		this.id = +params['id'];
    	});
		this.authService.getUser(this.id).then((user) => {
			this.userForEdit = user;
			this.user = this.userForEdit;
		});
	}

	public roleSelected(value:any):void {
		this.user.role = value.text;
	}

	ngOnDestroy() {
	    this.sub.unsubscribe();
	}

	submit() {
		this.authService.updateUser(this.user).subscribe(data => {
			if(data) {
				this.fashMessage.show('Se ha editado con exito el usuario!', {cssClass: 'alert-success', timeout: 2000})
				this.router.navigate(['/index-user']);
			}else{
				this.fashMessage.show('No se pudo usuario!', {cssClass: 'alert-danger', timeout: 2000})
			}
		})
	}
}