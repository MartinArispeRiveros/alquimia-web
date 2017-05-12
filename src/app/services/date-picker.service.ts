import { Injectable } from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Injectable()
export class DatePickerService {
	
	constructor() { }
	
	public myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
}