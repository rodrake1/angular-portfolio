import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatVerticalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private fb: FormBuilder) {}

  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;

  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  estrategias: string[];

  entrada = {
    contratos: 0,
    operacao: 'compra',
    compra: 0,
    venda: 0,
    objetivo: 0,
    stop: 0,
  };

  reversao1: number;
  reversao2: number;
  stop: number;
  usarSuboperacoes = false;

  ngAfterViewInit() {}

  ngOnInit() {
    this.estrategias = [
      'Chá do dia',
      'Receita de bolo',
      'Mini dólar',
      'Sniper',
    ];

    this.step1 = this.fb.group({
      estrategia: [this.estrategias[0]],
      patrimonio: [null, [Validators.required, Validators.min(2000)]],
    });

    this.step2 = this.fb.group({
      minima: [null, Validators.required],
      maxima: [null, [Validators.required, validadorCandle()]],
    });

    this.step3 = this.fb.group({
      contratos: [this.entrada.contratos, Validators.required],
      operacao: [this.entrada.operacao, [Validators.required]],
    });

    function validadorCandle(): ValidatorFn {
      return (control: AbstractControl) => {
        if (!control || !control.parent) {
          return null;
        }

        const minima = control.parent.get('minima')?.value;
        const maxima = control.value;
        const maximaMenorQueMinima = maxima <= minima;
        const candleMenor = maxima - minima < 200;
        const candleMaior = maxima - minima > 400;

        switch (true) {
          case maximaMenorQueMinima:
            return { maximaMenorQueMinima };
          case candleMenor:
            return { candleMenor };
          case candleMaior:
            return { candleMaior };
          default:
            return null;
        }
      };
    }
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

  get entradaContratos() {
    return this.step3.get('contratos');
  }

  validarMaxima() {
    this.maxima?.updateValueAndValidity();
  }

  calcularEntrada() {
    const patrimonio = this.patrimonio?.value;
    const minima = this.minima?.value;
    const maxima = this.maxima?.value;

    this.entrada.contratos = Math.floor(patrimonio / 2000);
    this.entrada.compra = maxima + 10;
    this.entrada.venda = minima - 10;
    this.entradaContratos?.setValue(this.entrada.contratos);
  }

  novaOperacao() {
    this.stepper.reset();
  }
}
