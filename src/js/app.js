const regularPurchases = 100;
const regularPurchasesPercent = 0.01;

const increasedPurchases = 100;
const increasedPurchasesPercent = 0.05;

const specialPurchases = 100;
const specialPurchasesPercent = 0.3;

let cashback = regularPurchases * regularPurchasesPercent +
    increasedPurchases * increasedPurchasesPercent +
    specialPurchases * specialPurchasesPercent;

const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit;
}

console.log(cashback);