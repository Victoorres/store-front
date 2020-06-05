import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Masculino } from 'src/app/classes/masculino';

@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.component.html',
  styleUrls: ['./masculino.component.css']
})



export class MasculinoComponent implements OnInit {
  roupaMasculina: Masculino;
  roupasMasculinas: Masculino[];
  roupaMasculinaForm: FormGroup;
  constructor(private builder: FormBuilder,

  ) { }

  ngOnInit() {
    this.roupaMasculinaForm = this.builder.group({
      roupasMasculinas: this.builder.array([])
    });

  }

  get roupasMasculinasGroup(): FormGroup {
    return this.roupaMasculinaForm.get("roupaMasculina") as FormGroup;
  }
  get roupasMasculinasArray(): FormArray {
    return this.roupaMasculinaForm.get("roupasMasculinas") as FormArray;
  }

  criaRoupaMasculina(): FormGroup {
    return this.builder.group({
      id: null,
      nome: ["", Validators.required],
      tamanho: ["", Validators.required],
      preco: ["", [Validators.required]]
    });
  }
  addRoupaMasculina() {
    this.roupasMasculinasArray.push(this.criaRoupaMasculina());
  }


}
