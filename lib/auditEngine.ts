export function calculateSavings(teamSize: number) {
  
  let monthlySavings = 0;

  if (teamSize <= 5) {
    monthlySavings = 540;
  } else if (teamSize <= 15) {
    monthlySavings = 1200;
  } else {
    monthlySavings = 3000;
  }

  return {
    monthlySavings,
    yearlySavings: monthlySavings * 12,
    optimizationScore: 82,
  };
}