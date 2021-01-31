import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatVerticalStepper } from '@angular/material/stepper';
import * as Validadores from '../../utils/validadores/validadores';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;

  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  estrategias: string[];
  reversao1: number;
  reversao2: number;
  stop: number;
  usarSuboperacoes = false;

  entrada = {
    contratos: 0,
    operacao: 'compra',
    compra: 0,
    venda: 0,
    objetivo: 0,
    stop: 0,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.estrategias = [
      'Chá do dia',
      'Receita de bolo',
      'Mini dólar',
      'Sniper',
    ];

    this.iniciarForm();
  }

  iniciarForm() {
    this.step1 = this.fb.group({
      estrategia: [this.estrategias[0]],
      patrimonio: [null, [Validators.required, Validators.min(2000)]],
    });

    this.step2 = this.fb.group({
      minima: [null, Validators.required],
      maxima: [null, [Validators.required, Validadores.validadorCandle]],
    });

    this.step3 = this.fb.group({
      contratos: [this.entrada.contratos],
      operacao: [this.entrada.operacao],
    });
  }

  get patrimonio() {
    return this.step1.get('patrimonio');
  }

  get minima() {
    return this.step2.get('minima');
  }

  get maxima() {
    return this.step2.get('maxima');
  }

  get contratosEntrada() {
    return this.step3.get('contratos');
  }

  validarMaxima() {
    this.maxima?.updateValueAndValidity();
  }

  validarMaxContratos() {
    this.contratosEntrada?.setValidators([
      Validators.required,
      Validators.min(1),
      Validadores.validadorEntrada(this.patrimonio?.value),
    ]);
  }

  calcularEntrada() {
    const patrimonio = this.patrimonio?.value;
    const minima = this.minima?.value;
    const maxima = this.maxima?.value;

    this.entrada.contratos = Math.floor(patrimonio / 2000);
    this.entrada.compra = maxima + 10;
    this.entrada.venda = minima - 10;
    this.contratosEntrada?.setValue(this.entrada.contratos);
  }

  novaOperacao() {
    this.stepper.reset();
  }
}
