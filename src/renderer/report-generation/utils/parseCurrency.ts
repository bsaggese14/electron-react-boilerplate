// replace with a currency librray

export const parseCurrency = (currency: string) => Number(currency.replace(/[^0-9.-]+/g, ""));
