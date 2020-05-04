import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Perfil',
			urls: [
				{ title: 'Perfil', url: '/perfil' },
				{ title: 'Perfil' }
			]
		},
		component: PerfilComponent
	}
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [PerfilComponent]
})
export class PerfilModule { }
