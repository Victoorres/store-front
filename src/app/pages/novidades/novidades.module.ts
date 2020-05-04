import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NovidadesComponent } from './novidades.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Novidades',
			urls: [
				{ title: 'Novidades', url: '/novidades' },
				{ title: 'Novidades' }
			]
		},
		component: NovidadesComponent
	}
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [NovidadesComponent]
})
export class NovidadesModule { }
