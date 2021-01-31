import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validadorCandle(
  control: AbstractControl
): ValidationErrors | null {
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
}

export function validadorEntrada(patrimonio: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !control.parent) {
      return null;
    }

    const contratos = control.value;
    const maxContratos = Math.floor(patrimonio / 2000);

    return contratos > maxContratos ? { maxContratos } : null;
  };
}
