export const formatToReais = (cents: number):string => {
    const value = cents / 100;
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const formatarToKwanza = (cents: number): string => {
    const value = cents / 100;
    return value.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
  }