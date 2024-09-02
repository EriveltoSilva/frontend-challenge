export enum TypeCurrency {
    BRL = 'BRL',
    AOA = 'AOA'
}

const currencyDetails = {
    BRL: {
        locale: 'pt-BR',
        currency: 'BRL'
    },
    AOA: {
        locale: 'pt-AO',
        currency: 'AOA'
    }
}

export const formatCurrency = (value: number, typeCurrency: TypeCurrency): string => {
    const { locale, currency } = currencyDetails[typeCurrency];
    return value.toLocaleString(locale, { style: 'currency', currency });
}
