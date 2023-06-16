export const centsToDollars = (cents: number): Number => {
    let dollars = cents / 100;
  
    dollars = Math.round(dollars * 100) / 100;
  
    return dollars;
  }