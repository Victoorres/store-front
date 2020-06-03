import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FemininoComponent } from './feminino.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Feminino',
			urls: [
				{ title: 'Feminino', url: '/feminino' },
				{ title: 'Feminino' }
			]
		},
		component: FemininoComponent
	}
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [FemininoComponent]
})
export class FemininoModule { }
