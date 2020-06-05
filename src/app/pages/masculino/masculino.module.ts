import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MasculinoComponent } from './masculino.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Masculino',
			urls: [
				{ title: 'Masculino', url: '/masculino' },
				{ title: 'Masculino' }
			]
		},
		component: MasculinoComponent
	}
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule,
		ReactiveFormsModule
	],
	declarations: [MasculinoComponent]
})
export class MasculinoModule { }
