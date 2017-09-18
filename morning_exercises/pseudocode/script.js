//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function (small, large, total) {

  const costOfSmall = 60
  const costOfLarge = (total - (costOfSmall * small)) / large;
  return costOfLarge;
};
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function (fuelPrice, milesPerGallon) {

  const earthCircumference = 24901;
  const gallonsNeeded = (earthCircumference / milesPerGallon);
  const totalCost = gallonsNeeded * fuelPrice;
  return totalCost;


};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function (galCostco, perFruitCosco, galKirk, perFruitKirk) {

  const pureFruitJuice = ((perFruitCosco * .01) * galCostco) + ((perFruitKirk * .01) * galKirk);
  const totalJuice = (galCostco + galKirk);
  const perFruitTotal = pureFruitJuice / totalJuice;

  return perFruitTotal;

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
