import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  estrategia = 0;
  patrimonio = 0;
  minima = 0;
  maxima = 0;
  usarSuboperacoes = false;
  entrada: Operacao = {
    operacao: 'compra',
    contratos: 0
  };
  reversao1: Operacao;

  ngOnInit(): void {}
}

interface Operacao {
  operacao: TipoOpercao;
  contratos: number;
  objetivo?: number;
}

type TipoOpercao = 'compra' | 'venda';
